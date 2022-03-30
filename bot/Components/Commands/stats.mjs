import { SlashCommandBuilder } from "@discordjs/builders";
import Command from "../../../Classes/Command.mjs";
import { BotPermissions } from "../../../typings/enums.mjs";
const basicInfo = {
  name: 'stats',
  description: 'Get Bot Status'
};
const statsCommand = new Command({ ...basicInfo,
  builder: new SlashCommandBuilder().setDescription(basicInfo.description).setName(basicInfo.name),
  isAvailable: true,
  permission: BotPermissions.ALL,
  run: async (client, database, ctx) => {
    try {
      await ctx.editReply(client.localeManager.getLocale(database.guild.locale).reply.stats(client).toOBJECT());
    } catch (error) {
      throw error;
    }
  }
});
export default statsCommand;