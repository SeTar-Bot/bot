import mongoose from "mongoose";
import { User } from "discord.js";
import UserSchema from "../Schemas/User";
import UserModel from "../Models/User";
import { userUpdateOpts } from "../../../types/classes";
import { dbUserSchema } from "../../../types/database"
import CacheManager from "../../Classes/Cache";

export default class UserManager {

    private client: typeof mongoose;
    public cache: CacheManager<dbUserSchema>;
    readonly model = UserModel;
    readonly schema = UserSchema;

    constructor(client: typeof mongoose)
    {
        if(client.connection.readyState !== 1)
            throw new Error(`Database connection is not established, Please try again later.`);

        this.client = client;
        this.cache = new CacheManager();
    }

    async add(u: User): Promise<ReturnType<mongoose.Model<dbUserSchema>["findOneAndUpdate"]> | ReturnType<mongoose.Document<unknown, any, dbUserSchema>["save"]>>
    {
        const data = await this.model.findOneAndUpdate({ id: u.id }, { id: u.id }, {
            new: true,
            upsert: true
        });
        
        if(data)
        {
            await this.cache.set(u.id, data);
            return data;
        }
        else
        {
            const newUserModel = new this.model({ id: u.id });
            const result = await newUserModel.save();
            await this.cache.set(u.id, result);
            return result;
        }
    }

    async remove(uId: string): Promise<ReturnType<mongoose.Model<dbUserSchema>["findOneAndDelete"]>>
    {
        if(await this.cache.check(uId))
            await this.cache.remove(uId, false);

        return await this.model.findOneAndDelete({ id: uId })
    }

    async fetch(u: User, skipCache = false): Promise<ReturnType<mongoose.Model<dbUserSchema>["findOne"]> | ReturnType<mongoose.Document<unknown, any, dbUserSchema>["save"]>>
    {
        if(!skipCache)
            if(await this.cache.check(u.id))
                return await this.cache.get(u.id);

        const res = await this.model.findOne({ id: u.id });
        if(res)
        {
            await this.cache.set(u.id, res);
            return res;
        }
        else
        {
            const newUserModel = new this.model({ id: u.id });
            const result = await newUserModel.save();
            await this.cache.set(u.id, result);
            return result;
        }
    }

    async update(u: User, opts: userUpdateOpts): Promise<ReturnType<mongoose.Model<dbUserSchema>["findOneAndUpdate"]>>
    {
        const res = await this.model.findOneAndUpdate({ id: u.id }, opts, { new: true })
        
        await this.cache.set(u.id, res);
        return res;
    }
}