import GuildModel from "../Models/Guild.mjs";
import GuildSchema from "../Schemas/Guild.mjs";
import CacheManager from "../../Classes/Cache.mjs";
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
    await this.cache.set(g.id, data);
    return data;
  }

  async remove(gId) {
    if (await this.cache.check(gId)) await this.cache.remove(gId, false);
    return await this.model.findOneAndDelete({
      id: gId
    });
  }

  async fetch(g, skipCache = false) {
    if (!skipCache) if (await this.cache.check(g.id)) return await this.cache.get(g.id);
    this.model.findOne({
      id: g.id
    }).then(async res => {
      if (res) {
        await this.cache.set(g.id, res);
        return res;
      } else {
        const newGuildModel = new this.model({
          id: g.id
        });
        const result = await newGuildModel.save();
        await this.cache.set(g.id, result);
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
    await this.cache.set(g.id, res);
    return res;
  }

}