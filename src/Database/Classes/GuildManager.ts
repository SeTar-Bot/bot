import mongoose from "mongoose";
import { Guild } from "discord.js";
import GuildModel from "../Models/Guild";
import GuildSchema from "../Schemas/Guild";
import { guildUpdateOpts } from "../../../types/classes";
import { dbGuildSchema } from "../../../types/database";
import CacheManager from "../../Classes/Cache";

export default class GuildManager {

    private client: typeof mongoose;
    public cache: CacheManager<dbGuildSchema>;
    readonly model = GuildModel;
    readonly schema = GuildSchema;

    constructor(client: typeof mongoose)
    {
        if(client.connection.readyState !== 1)
            throw new Error(`Database connection is not established, Please try again later.`);

        this.client = client;
        this.cache = new CacheManager();
    }

    async add(g: Guild): Promise<ReturnType<mongoose.Model<dbGuildSchema>["findOneAndUpdate"]>>
    {
        const data = await this.model.findOneAndUpdate({ id: g.id }, { id: g.id }, {
            new: true,
            upsert: true
        });
        await this.cache.set(g.id, data);
        return data;
    }

    async remove(gId: string): Promise<ReturnType<mongoose.Model<dbGuildSchema>["findOneAndDelete"]>>
    {
        if(await this.cache.check(gId))
            await this.cache.remove(gId, false);

        return await this.model.findOneAndDelete({ id: gId });
    }

    async fetch(g: Guild, skipCache = false): Promise<ReturnType<mongoose.Model<dbGuildSchema>["findOne"]> | ReturnType<mongoose.Document<unknown, any, dbGuildSchema>["save"]>>
    {
        if(!skipCache)
            if(await this.cache.check(g.id))
                return await this.cache.get(g.id);

        this.model.findOne({ id: g.id })
        .then(async res => {
            if(res)
            {
                await this.cache.set(g.id, res);
                return res;
            }
            else
            {
                const newGuildModel = new this.model({ id: g.id });
                const result = await newGuildModel.save();
                await this.cache.set(g.id, result);
                return result;
            }
        })
        .catch(e => { throw e });
    }

    async update(g: Guild, opts: guildUpdateOpts): Promise<ReturnType<mongoose.Model<dbGuildSchema>["findOneAndUpdate"]>>
    {
        const res = await this.model.findOneAndUpdate({ id: g.id }, opts, { new: true });
        await this.cache.set(g.id, res);
        return res;
    }
}