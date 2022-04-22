import { CacheManager } from "@setar/cache";
import UserSchema from "../Schemas/User.mjs";
import UserModel from "../Models/User.mjs";
export default class UserManager {
  model = UserModel;
  schema = UserSchema;

  constructor(client) {
    if (client.connection.readyState !== 1) throw new Error(`Database connection is not established, Please try again later.`);
    this.client = client;
    this.cache = new CacheManager();
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
      this.cache.Set(u.id, data);
      return data;
    } else {
      const newUserModel = new this.model({
        id: u.id
      });
      const result = await newUserModel.save();
      this.cache.Set(u.id, result);
      return result;
    }
  }

  async remove(uId) {
    if (this.cache.Exist(uId)) this.cache.Delete(uId);
    return await this.model.findOneAndDelete({
      id: uId
    });
  }

  async fetch(u, skipCache = false) {
    if (!skipCache) if (this.cache.Exist(u.id)) return this.cache.Get(u.id);
    const res = await this.model.findOne({
      id: u.id
    });

    if (res) {
      this.cache.Set(u.id, res);
      return res;
    } else {
      const newUserModel = new this.model({
        id: u.id
      });
      const result = await newUserModel.save();
      this.cache.Set(u.id, result);
      return result;
    }
  }

  async update(u, opts) {
    const res = await this.model.findOneAndUpdate({
      id: u.id
    }, opts, {
      new: true
    });
    this.cache.Set(u.id, res);
    return res;
  }

}