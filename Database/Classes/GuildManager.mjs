import { Collection } from "discord.js";
import GuildModel from "../Models/Guild.mjs";
import GuildSchema from "../Schemas/Guild.mjs";
export default class GuildManager {
  model = GuildModel;
  schema = GuildSchema;
  cache = new Collection();

  constructor(client) {
    if (client.connection.readyState !== 1) throw new Error(`Database connection is not established, Please try again later.`);
    this.client = client;
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
    this.cache.set(g.id, data);
    return data;
  }

  async remove(gId) {
    if (this.cache.has(gId)) this.cache.delete(gId);
    return await this.model.findOneAndDelete({
      id: gId
    });
  }

  async fetch(g) {
    const res = await this.model.findOne({
      id: g.id
    });

    if (res) {
      this.cache.set(g.id, res);
      return res;
    } else {
      const newGuildModel = new this.model({
        id: g.id
      });
      const result = await newGuildModel.save();
      this.cache.set(g.id, result);
      return result;
    }
  }

  async update(g, opts) {
    const res = await this.model.findOneAndUpdate({
      id: g.id
    }, opts, {
      new: true
    });
    this.cache.set(g.id, res);
    return res;
  }

}