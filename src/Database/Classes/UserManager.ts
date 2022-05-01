import mongoose from "mongoose";
import { Collection, User, UserResolvable } from "discord.js";
import UserSchema from "../Schemas/User";
import UserModel from "../Models/User";
import { userUpdateOpts } from "../../../types/classes";
import { dbUserSchema } from "../../../types/database"

export default class UserManager {

    private client: typeof mongoose;
    public readonly cache: Collection<UserResolvable, dbUserSchema> = new Collection();
    readonly model = UserModel;
    readonly schema = UserSchema;

    constructor(client: typeof mongoose)
    {
        if(client.connection.readyState !== 1)
            throw new Error(`Database connection is not established, Please try again later.`);

        this.client = client;
    }

    async add(u: User): Promise<ReturnType<mongoose.Model<dbUserSchema>["findOneAndUpdate"]> | ReturnType<mongoose.Document<unknown, any, dbUserSchema>["save"]>>
    {
        const data = await this.model.findOneAndUpdate({ id: u.id }, { id: u.id }, {
            new: true,
            upsert: true
        });
        
        if(data)
        {
            this.cache.set(u.id, data);
            return data;
        }
        else
        {
            const newUserModel = new this.model({ id: u.id });
            const result = await newUserModel.save();
            this.cache.set(u.id, result);
            return result;
        }
    }

    async remove(uId: string): Promise<ReturnType<mongoose.Model<dbUserSchema>["findOneAndDelete"]>>
    {
        if(this.cache.has(uId))
            this.cache.delete(uId);

        return await this.model.findOneAndDelete({ id: uId })
    }

    async fetch(u: User): Promise<ReturnType<mongoose.Model<dbUserSchema>["findOne"]> | ReturnType<mongoose.Document<unknown, any, dbUserSchema>["save"]>>
    {
        const res = await this.model.findOne({ id: u.id });
        if(res)
        {
            this.cache.set(u.id, res);
            return res;
        }
        else
        {
            const newUserModel = new this.model({ id: u.id });
            const result = await newUserModel.save();
            this.cache.set(u.id, result);
            return result;
        }
    }

    async update(u: User, opts: userUpdateOpts): Promise<ReturnType<mongoose.Model<dbUserSchema>["findOneAndUpdate"]>>
    {
        const res = await this.model.findOneAndUpdate({ id: u.id }, opts, { new: true })
        
        this.cache.set(u.id, res);
        return res;
    }
}