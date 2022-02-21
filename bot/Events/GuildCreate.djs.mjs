import ora from "ora";
import Event from "../../Classes/Event.mjs";
import { localeList } from "../../typings/enums.mjs";
import botOptions from "../Config/botOptions.mjs";
const GuildCreateEvent = new Event({
  name: 'guildCreate',
  isAvailable: true,
  run: async (client, guild) => {
    const myConsole = ora({
      text: 'New guild created, Adding to Database',
      spinner: 'bouncingBar',
      color: 'white'
    }).start();

    try {
      if (!guild.me.permissions.has(botOptions.perms)) {
        const firstChannel = guild.channels.cache.find(channel => channel.isText() && channel.permissionsFor(guild.me).has('SEND_MESSAGES'));

        if (firstChannel) {
          await firstChannel.send(client.localeManager.getLocale(localeList.ENGLISH).error.permission().toOBJECT());
          guild.leave();
        } else {
          const guildOwner = await client.users.fetch(guild.ownerId);
          await guildOwner.send(client.localeManager.getLocale(localeList.ENGLISH).error.permission().toOBJECT());
          guild.leave();
        }
      } else {
        const dbGuildObject = await client.database.guilds.add(guild);
        myConsole.succeed(`Guild [${guild.id}] has been Created in Database.`);
      }
    } catch (error) {
      myConsole.fail(`Failed to add guild to Database due Error: ${error}`);
    }
  }
});
export default GuildCreateEvent;