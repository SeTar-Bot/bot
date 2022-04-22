import Button from "../../../Classes/Button.mjs";
import { BotPermissions } from "../../../typings/enums.mjs";
const refreshStatsButton = new Button({
  name: 'refreshStats',
  description: `Refresh the Stats`,
  isAvailable: false,
  permission: BotPermissions.ALL,
  run: async (client, database, ctx) => {
    const msg = client.localeManager.getLocale(database.guild.locale).reply.stats(client);
    msg.ActionRows = [];
    await ctx.deferUpdate();
    await ctx.update(msg.toOBJECT());
  }
});
export default refreshStatsButton;