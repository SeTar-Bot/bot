import Button from "../../../Classes/Button.mjs";
import { BotPermissions } from "../../../typings/enums.mjs";
const musicInfoButton = new Button({
  name: 'music_info',
  description: `Show Music Modal`,
  isAvailable: false,
  permission: BotPermissions.ALL,
  run: async (client, database, ctx) => {
    await ctx.showModal(client.localeManager.getLocale(database.guild.locale).modal.info());
  }
});
export default musicInfoButton;