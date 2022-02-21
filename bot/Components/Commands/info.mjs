import { SlashCommandBuilder } from "@discordjs/builders";
import Command from "../../../Classes/Command.mjs";
import { BotPermissions } from "../../../typings/enums.mjs";
const basicInfo = {
  name: 'info',
  description: 'Get Information About the Bot and Developers'
};
const infoCommand = new Command({ ...basicInfo,
  builder: new SlashCommandBuilder().setDescription(basicInfo.description).setName(basicInfo.name),
  isAvailable: true,
  permission: BotPermissions.ALL,
  run: async (client, database, ctx) => {
    try {
      await ctx.editReply(client.localeManager.getLocale(database.guild.locale).reply.info(client).toOBJECT());
    } catch (error) {
      throw error;
    }
  }
});
export default infoCommand;