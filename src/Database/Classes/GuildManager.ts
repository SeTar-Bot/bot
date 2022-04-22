import mongoose from "mongoose";
import { CacheManager } from "@setar/cache";
import { Guild } from "discord.js";
import GuildModel from "../Models/Guild";
import GuildSchema from "../Schemas/Guild";
import { guildUpdateOpts } from "../../../types/classes";

export default class GuildManager {

    private client: typeof mongoose;
    public cache: CacheManager;
    readonly model = GuildModel;
    readonly schema = GuildSchema;

    constructor(client: typeof mongoose)
    {
        if(client.connection.readyState !== 1)
            throw new Error(`Database connection is not established, Please try again later.`);

        this.client = client;
        this.cache = new CacheManager();
    }

    async add(g: Guild): Promise<any>
    {
        const data = await this.model.findOneAndUpdate({ id: g.id }, { id: g.id }, {
            new: true,
            upsert: true
        });
        this.cache.Set(g.id, data);
        return data;
    }

    async remove(gId: string): Promise<any>
    {
        if(this.cache.Exist(gId))
            this.cache.Delete(gId);

        return await this.model.findOneAndDelete({ id: gId });
    }

    async fetch(g: Guild, skipCache = false): Promise<any>
    {
        if(!skipCache)
            if(this.cache.Exist(g.id))
                return this.cache.Get(g.id);

        const res = await this.model.findOne({ id: g.id });
        if(res)
        {
            this.cache.Set(g.id, res);
            return res;
        }
        else
        {
            const newGuildModel = new this.model({ id: g.id });
            const result = await newGuildModel.save();
            this.cache.Set(g.id, result);
            return result;
        }
    }

    async update(g: Guild, opts: guildUpdateOpts): Promise<any>
    {
        const res = await this.model.findOneAndUpdate({ id: g.id }, opts, { new: true });
        this.cache.Set(g.id, res);
        return res;
    }
}