import chalk from "chalk";
import Event from "../../Classes/Event.mjs";
const WarnEvent = new Event({
  name: 'warn',
  isAvailable: true,
  run: async (client, error) => {
    try {
      console.warn(chalk.bgYellow(`----- Warning -----`), `\n`, error, `\n`, chalk.bgYellow(`----- Warning -----`));
    } catch (error) {
      console.error(`${chalk.bgRed(`----- ERROR -----`)}\nError Location: Events/Warning.djs\nError: ${error}\n${chalk.bgRed(`----- ERROR -----`)}`);
    }
  }
});
export default WarnEvent;