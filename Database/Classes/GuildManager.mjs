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
    try {
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
    } catch (error) {
      throw error;
    }
  }

  async remove(gId) {
    try {
      if (this.cache.Exist(gId)) this.cache.Delete(gId);
      return await this.model.findOneAndDelete({
        id: gId
      });
    } catch (error) {
      throw error;
    }
  }

  async fetch(g, skipCache = false) {
    try {
      if (!skipCache) if (this.cache.Exist(g.id)) return this.cache.Get(g.id);
      const res = await this.model.findOne({
        id: g.id
      });

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
    } catch (error) {
      throw error;
    }
  }

  async update(g, opts) {
    try {
      const res = await this.model.findOneAndUpdate({
        id: g.id
      }, opts, {
        new: true
      });
      this.cache.Set(g.id, res);
      return res;
    } catch (error) {
      throw error;
    }
  }

}