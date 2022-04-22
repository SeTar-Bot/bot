import { Guild, TextChannel } from "discord.js";
import ora from "ora";
import Client from "../../Classes/Client";
import Event from "../../Classes/Event";
import { localeList } from "../../typings/enums";
import botOptions from "../Config/botOptions";

const GuildCreateEvent = new Event({
    name: 'guildCreate',
    isAvailable: true,
    type: "discord.js",
    run: async (client: Client, guild: Guild): Promise<any> => {
        const myConsole = ora({
            text: 'New guild created, Adding to Database',
            spinner: 'bouncingBar',
            color: 'white'
        }).start();
        try {
            if(!guild.me.permissions.has(botOptions.perms))
            {
                const firstChannel: TextChannel = guild.channels.cache.find(channel => channel.isText() && channel.permissionsFor(guild.me).has('SEND_MESSAGES')) as TextChannel;
                if(firstChannel)
                {
                    await firstChannel.send(client.localeManager.getLocale(localeList.ENGLISH).error.permission().toOBJECT())
                    guild.leave();
                }
                else
                {
                    const guildOwner = await client.users.fetch(guild.ownerId);
                    await guildOwner.send(client.localeManager.getLocale(localeList.ENGLISH).error.permission().toOBJECT())
                    guild.leave();
                }
            }
            else
            {
                const dbGuildObject = await client.database.guilds.add(guild);
                if(dbGuildObject)
                    myConsole.succeed(`Guild [${guild.id}] has been Created in Database.`)
            }
        } catch (error) {
            myConsole.fail(`Failed to add guild to Database due Error: ${error}`);
        }
    }
})

export default GuildCreateEvent;