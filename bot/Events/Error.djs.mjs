import chalk from "chalk";
import Event from "../../Classes/Event.mjs";
const ErrorEvent = new Event({
  name: 'error',
  isAvailable: true,
  type: "discord.js",
  run: async (client, error) => {
    console.warn(chalk.bgRed(`----- Error -----`), `\n`, `[NAME]: ${error.name}`, `\n`, `[MESSAGE]: ${error.message}`, `\n`, `[STACK]: ${error.stack}`, `\n`, `\n`, chalk.bgYellow(`----- Error -----`));
  }
});
export default ErrorEvent;