import chalk from "chalk";
import Client from "../../Classes/Client";
import Event from "../../Classes/Event";

const WarnEvent = new Event({
    name: 'warn',
    isAvailable: true,
    type: "discord.js",
    run: async (client: Client, error: string): Promise<any> => {
        try {
            console.warn(chalk.bgYellow(`----- Warning -----`), `\n`, error, `\n`, chalk.bgYellow(`----- Warning -----`))
        } catch (error) {
            console.error(`${chalk.bgRed(`----- ERROR -----`)}\nError Location: Events/Warning.djs\nError: ${error}\n${chalk.bgRed(`----- ERROR -----`)}`)
        }
            
    }
});

export default WarnEvent;