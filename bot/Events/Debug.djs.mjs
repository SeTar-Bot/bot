import chalk from "chalk";
import Event from "../../Classes/Event.mjs";
const DebugEvent = new Event({
  name: 'debug',
  isAvailable: false,
  run: async (client, error) => {
    console.warn(chalk.bgYellow(`----- Debug -----`), `\n`, error, `\n`, chalk.bgYellow(`----- Debug -----`));
  }
});
export default DebugEvent;