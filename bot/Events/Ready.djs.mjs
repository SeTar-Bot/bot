import chalk from "chalk";
import ora from "ora";
import Event from "../../Classes/Event.mjs";
import botOptions from "../Config/botOptions.mjs";
const ReadyEvent = new Event({
  name: 'ready',
  isAvailable: true,
  type: "discord.js",
  run: async client => {
    const myConsole = ora({
      text: 'Syncing Database',
      spinner: 'runner',
      color: 'white'
    }).start();

    try {
      const syncData = await client.database.sync(client.guilds.cache);
      client.user.setPresence(botOptions.readyPresence(client));
      myConsole.succeed(`Databse is now Synced | ${!syncData.new || !syncData.old ? `No Changes.` : `${chalk.bgBlue(`${syncData.new}`)} New Servers Added & ${chalk.bgRed(`${syncData.old}`)} Old Servers Removed`}`);
    } catch (error) {
      myConsole.fail(`Syncing database failed Due Error: ${error}`);
    }
  }
});
export default ReadyEvent;