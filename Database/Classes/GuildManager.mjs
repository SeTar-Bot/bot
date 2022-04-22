import { CacheManager } from "@setar/cache";
import GuildModel from "../Models/Guild.mjs";
import GuildSchema from "../Schemas/Guild.mjs";
export default class GuildManager {
  model = GuildModel;
  schema = GuildSchema;

  constructor(client) {
    if (client.connection.readyState !== 1) throw new Error(`Database connection is not established, Please try again later.`);
    this.client = client;
    this.cache = new CacheManager();
  }

  async add(g) {
    const data = await this.model.findOneAndUpdate({
      id: g.id
    }, {
      id: g.id
    }, {
      new: true,
      upsert: true
    });
    this.cache.Set(g.id, data);
    return data;
  }

  async remove(gId) {
    if (this.cache.Exist(gId)) this.cache.Delete(gId);
    return await this.model.findOneAndDelete({
      id: gId
    });
  }

  async fetch(g, skipCache = false) {
    if (!skipCache) if (this.cache.Exist(g.id)) return this.cache.Get(g.id);
    this.model.findOne({
      id: g.id
    }).then(async res => {
      if (res) {
        this.cache.Set(g.id, res);
        return res;
      } else {
        const newGuildModel = new this.model({
          id: g.id
        });
        const result = await newGuildModel.save();
        this.cache.Set(g.id, result);
        return result;
      }
    }).catch(e => {
      throw e;
    });
  }

  async update(g, opts) {
    const res = await this.model.findOneAndUpdate({
      id: g.id
    }, opts, {
      new: true
    });
    this.cache.Set(g.id, res);
    return res;
  }

}