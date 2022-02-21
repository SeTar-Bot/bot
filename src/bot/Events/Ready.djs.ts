import chalk from "chalk";
import ora from "ora";
import Client from "../../Classes/Client";
import Event from "../../Classes/Event";
import botOptions from "../Config/botOptions";

const ReadyEvent: Event = new Event({
    name: 'ready',
    isAvailable: true,
    run: async (client: Client) => {

        const myConsole = ora({
            text: 'Syncing Database',
            spinner: 'runner',
            color: 'white'
        }).start();

        try {
            const syncData = await client.database.sync(client.guilds.cache);
            client.user.presence.set(botOptions.readyPresence(client));
            myConsole.succeed(`Databse is now Synced | ${(!syncData.new || !syncData.old) ? `No Changes.`: `${chalk.bgBlue(`${syncData.new}`)} New Servers Added & ${chalk.bgRed(`${syncData.old}`)} Old Servers Removed`}`);
        } catch (error) {
            myConsole.fail(`Syncing database failed Due Error: ${error}`);
        }
    }
});

export default ReadyEvent;