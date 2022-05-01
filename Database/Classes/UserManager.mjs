import { Collection } from "discord.js";
import UserSchema from "../Schemas/User.mjs";
import UserModel from "../Models/User.mjs";
export default class UserManager {
  cache = new Collection();
  model = UserModel;
  schema = UserSchema;

  constructor(client) {
    if (client.connection.readyState !== 1) throw new Error(`Database connection is not established, Please try again later.`);
    this.client = client;
  }

  async add(u) {
    const data = await this.model.findOneAndUpdate({
      id: u.id
    }, {
      id: u.id
    }, {
      new: true,
      upsert: true
    });

    if (data) {
      this.cache.set(u.id, data);
      return data;
    } else {
      const newUserModel = new this.model({
        id: u.id
      });
      const result = await newUserModel.save();
      this.cache.set(u.id, result);
      return result;
    }
  }

  async remove(uId) {
    if (this.cache.has(uId)) this.cache.delete(uId);
    return await this.model.findOneAndDelete({
      id: uId
    });
  }

  async fetch(u) {
    const res = await this.model.findOne({
      id: u.id
    });

    if (res) {
      this.cache.set(u.id, res);
      return res;
    } else {
      const newUserModel = new this.model({
        id: u.id
      });
      const result = await newUserModel.save();
      this.cache.set(u.id, result);
      return result;
    }
  }

  async update(u, opts) {
    const res = await this.model.findOneAndUpdate({
      id: u.id
    }, opts, {
      new: true
    });
    this.cache.set(u.id, res);
    return res;
  }

}