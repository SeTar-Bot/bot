import mongoose from "mongoose";
import { Collection, Guild, GuildResolvable } from "discord.js";
import GuildModel from "../Models/Guild";
import GuildSchema from "../Schemas/Guild";
import { guildUpdateOpts } from "../../../types/classes";
import { dbGuildSchema } from "../../../types/database";

export default class GuildManager {

    private client: typeof mongoose;
    readonly model = GuildModel;
    readonly schema = GuildSchema;
    public readonly cache: Collection<GuildResolvable, dbGuildSchema> = new Collection(); 

    constructor(client: typeof mongoose)
    {
        if(client.connection.readyState !== 1)
            throw new Error(`Database connection is not established, Please try again later.`);

        this.client = client;
    }

    async add(g: Guild): Promise<ReturnType<mongoose.Model<dbGuildSchema>["findOneAndUpdate"]>>
    {
        const data = await this.model.findOneAndUpdate({ id: g.id }, { id: g.id }, {
            new: true,
            upsert: true
        });
        this.cache.set(g.id, data);
        return data;
    }

    async remove(gId: string): Promise<ReturnType<mongoose.Model<dbGuildSchema>["findOneAndDelete"]>>
    {
        if(this.cache.has(gId))
            this.cache.delete(gId);

        return await this.model.findOneAndDelete({ id: gId });
    }

    async fetch(g: Guild): Promise<ReturnType<mongoose.Model<dbGuildSchema>["findOne"]> | ReturnType<mongoose.Document<unknown, any, dbGuildSchema>["save"]>>
    {

        const res = await this.model.findOne({ id: g.id })
        if(res)
        {
            this.cache.set(g.id, res);
            return res;
        }
        else
        {
            const newGuildModel = new this.model({ id: g.id });
            const result = await newGuildModel.save();
            this.cache.set(g.id, result);
            return result;
        }
    }

    async update(g: Guild, opts: guildUpdateOpts): Promise<ReturnType<mongoose.Model<dbGuildSchema>["findOneAndUpdate"]>>
    {
        const res = await this.model.findOneAndUpdate({ id: g.id }, opts, { new: true });
        this.cache.set(g.id, res);
        return res;
    }
}