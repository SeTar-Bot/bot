import chalk from "chalk";
import Event from "../../Classes/Event.mjs";
const InvalidateEvent = new Event({
  name: 'invalidated',
  isAvailable: true,
  run: async client => {
    try {
      console.log(chalk.bgRed(`----- CLIENT INVALIDATED -----`), `\n`, `Client just got invalidated, ${chalk.bgRed(`Restarting Process`)}...!`);
      process.exit(1);
    } catch (error) {
      console.error(`${chalk.bgRed(`----- ERROR -----`)}\nError Location: Events/Invalidate.djs\nError: ${error}\n${chalk.bgRed(`----- ERROR -----`)}`);
    }
  }
});
export default InvalidateEvent;