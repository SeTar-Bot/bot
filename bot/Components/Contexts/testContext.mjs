import Context from "../../../Classes/Context.mjs";
import { BotPermissions, ContextTypes } from "../../../typings/enums.mjs";
const testContext = new Context({
  name: `test-context`,
  type: ContextTypes.MESSAGE,
  isAvailable: false,
  permission: BotPermissions.ALL,
  run: async (client, interaction) => {}
});
export default testContext;