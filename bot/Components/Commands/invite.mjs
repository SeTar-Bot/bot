import { SlashCommandBuilder } from "@discordjs/builders";
import Command from "../../../Classes/Command.mjs";
import { BotPermissions } from "../../../typings/enums.mjs";
const basicInfo = {
  name: 'invite',
  description: 'Get Bot Invite Link and Enjoy Playing Music :)'
};
const inviteCommand = new Command({ ...basicInfo,
  builder: new SlashCommandBuilder().setDescription(basicInfo.description).setName(basicInfo.name),
  isAvailable: true,
  permission: BotPermissions.ALL,
  run: async (client, database, ctx) => {
    try {
      await ctx.editReply(client.localeManager.getLocale(database.guild.locale).reply.invite().toOBJECT());
    } catch (error) {
      throw error;
    }
  }
});
export default inviteCommand;