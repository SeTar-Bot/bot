import { Guild } from "discord.js";
import ora from "ora";
import Client from "../../Classes/Client";
import Event from "../../Classes/Event";

const GuildDeleteEvent = new Event({
    name: 'guildDelete',
    isAvailable: true,
    type: "discord.js",
    run: async (client: Client, guild: Guild): Promise<any> => {
        const myConsole = ora({
            text: 'an old guild Removed, Removeing from Database',
            spinner: 'bouncingBar',
            color: 'white'
        }).start();
        try {
            const res = await client.database.guilds.remove(guild.id);
            if(res)
                myConsole.succeed(`Guild [${guild.id}] has been Removed from Database.`)
        } catch (error) {
            myConsole.fail(`Failed to remove guild from Database due Error: ${error}`);
        }
    }
})

export default GuildDeleteEvent;