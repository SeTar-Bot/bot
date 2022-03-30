import ora from "ora";
import Event from "../../Classes/Event.mjs";
const GuildDeleteEvent = new Event({
  name: 'guildDelete',
  isAvailable: true,
  type: "discord.js",
  run: async (client, guild) => {
    const myConsole = ora({
      text: 'an old guild Removed, Removeing from Database',
      spinner: 'bouncingBar',
      color: 'white'
    }).start();

    try {
      const res = await client.database.guilds.remove(guild.id);
      myConsole.succeed(`Guild [${guild.id}] has been Removed from Database.`);
    } catch (error) {
      myConsole.fail(`Failed to remove guild from Database due Error: ${error}`);
    }
  }
});
export default GuildDeleteEvent;