import chalk from "chalk";
import Client from "../../Classes/Client";
import Event from "../../Classes/Event";

const ErrorEvent = new Event({
    name: 'error',
    isAvailable: true,
    run: async (client: Client, error: Error): Promise<any> => {
            console.warn(chalk.bgRed(`----- Error -----`), `\n`, `[NAME]: ${error.name}`, `\n`, `[MESSAGE]: ${error.message}`, `\n`, `[STACK]: ${error.stack}`, `\n`, `\n`, chalk.bgYellow(`----- Error -----`))
        
            
    }
});

export default ErrorEvent;