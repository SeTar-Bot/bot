import { Collection, Guild } from "discord.js";
import mongoose from "mongoose";
import ora from "ora";
import GuildManager from "./Classes/GuildManager";
import UserManager from "./Classes/UserManager";

export default class SetarDB {

    public client: typeof mongoose = mongoose;
    public guilds: GuildManager;
    public users: UserManager;

    private URI: string;
    constructor(uri: string)
    {
        this.URI = uri;
    }


    async intialize(): Promise<void>
    {
        try {
            await this.client.connect(this.URI);
            this.guilds = new GuildManager(this.client);
            this.users = new UserManager(this.client);
        } catch (error) {
            throw error;
        }
    }

    sync(guilds: Collection<string, Guild>): Promise<{ new: number; old: number; }>
    {
        return new Promise((resolve, reject) => {
            /*const myConsole = ora({
                text: 'Syncing Database',
                spinner: 'betaWave',
                color: 'white'
            }).start();*/
            const botGuilds = [...guilds].map( ([name, body]) => (body) );
            let addedGuilds = 0,
                removedGuilds = 0;

            this.guilds.model.find()
            .then(async dbGuilds => {
                try {
                    for await (const guild of botGuilds)
                    {
                        const dbGuild = dbGuilds.find(v => v.id == guild.id)
                        if(!dbGuild)
                        {
                            // Add
                            await this.guilds.add(guild);
                            addedGuilds++;
                        }
                    }

                    for await (const dbGuild of dbGuilds)
                    {
                        const botGuild = botGuilds.find(v => v.id == dbGuild.id)
                        if(!botGuild)
                        {
                            // Remove
                            await this.guilds.remove(dbGuild.id);
                            removedGuilds++;
                        }
                    }

                    resolve({ new: addedGuilds, old: removedGuilds });
                } catch (error) {
                    reject(error)
                }
            })
            .catch(reject);
        });
    }
}