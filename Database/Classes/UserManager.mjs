import UserSchema from "../Schemas/User.mjs";
import UserModel from "../Models/User.mjs";
import CacheManager from "../../Classes/Cache.mjs";
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
      await this.cache.set(u.id, data);
      return data;
    } else {
      const newUserModel = new this.model({
        id: u.id
      });
      const result = await newUserModel.save();
      await this.cache.set(u.id, result);
      return result;
    }
  }

  async remove(uId) {
    if (await this.cache.check(uId)) await this.cache.remove(uId, false);
    return await this.model.findOneAndDelete({
      id: uId
    });
  }

  async fetch(u, skipCache = false) {
    if (!skipCache) if (await this.cache.check(u.id)) return await this.cache.get(u.id);
    const res = await this.model.findOne({
      id: u.id
    });

    if (res) {
      await this.cache.set(u.id, res);
      return res;
    } else {
      const newUserModel = new this.model({
        id: u.id
      });
      const result = await newUserModel.save();
      await this.cache.set(u.id, result);
      return result;
    }
  }

  async update(u, opts) {
    const res = await this.model.findOneAndUpdate({
      id: u.id
    }, opts, {
      new: true
    });
    await this.cache.set(u.id, res);
    return res;
  }

}