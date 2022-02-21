import chalk from "chalk";
import Client from "../../Classes/Client";
import Event from "../../Classes/Event";

const DebugEvent = new Event({
    name: 'debug',
    isAvailable: false,
    run: async (client: Client, error: string): Promise<any> => {
        console.warn(chalk.bgYellow(`----- Debug -----`), `\n`, error, `\n`, chalk.bgYellow(`----- Debug -----`))    
    }
});

export default DebugEvent;