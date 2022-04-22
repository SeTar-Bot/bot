import { SlashCommandBuilder, SlashCommandStringOption, SlashCommandUserOption } from "@discordjs/builders";
import Command from "../../../Classes/Command.mjs";
import { BotPermissions, BotRoles } from "../../../typings/enums.mjs";
const basicInfo = {
  name: 'permission',
  description: 'Change a User Permission'
};
const permCommand = new Command({ ...basicInfo,
  builder: new SlashCommandBuilder().addUserOption(new SlashCommandUserOption().setName('user').setDescription(`User to change permission`).setRequired(true)).addStringOption(new SlashCommandStringOption().setName(`permission`).setDescription('Permission you want to change to').setRequired(true).setChoices([['ban', BotPermissions.BAN.toString()], ['member', BotPermissions.ALL.toString()], ['support', BotPermissions.SUPPORT.toString()], ['admin', BotPermissions.ADMIN.toString()]])).setDescription(basicInfo.description).setName(basicInfo.name),
  isAvailable: true,
  permission: BotPermissions.ADMIN,
  run: async (client, database, ctx) => {
    const mentionedUser = ctx.options.getUser('user', true);
    const targetPerm = Number(ctx.options.getString('permission'));
    let targetRole;
    const uData = await client.database.users.fetch(mentionedUser);
    const res = await client.database.users.update(mentionedUser, {
      permission: targetPerm
    });

    switch (targetPerm) {
      case BotPermissions.BAN:
        targetRole = BotRoles.BAN;
        break;

      case BotPermissions.ALL:
        targetRole = BotRoles.ALL;
        break;

      case BotPermissions.SUPPORT:
        targetRole = BotRoles.SUPPORT;
        break;

      case BotPermissions.ADMIN:
        targetRole = BotRoles.ADMIN;
        break;
    }

    if (res) ctx.editReply(client.localeManager.getLocale(database.guild.locale).reply.permission(mentionedUser, targetRole, uData.permission, res.permission).toOBJECT());
  }
});
export default permCommand;