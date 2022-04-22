import { SlashCommandBuilder, SlashCommandStringOption } from "@discordjs/builders";
import Command from "../../../Classes/Command.mjs";
import { BotPermissions, localeList } from "../../../typings/enums.mjs";
const basicInfo = {
  name: 'language',
  description: 'Change Bot Language for your Server.'
};
const langCommand = new Command({ ...basicInfo,
  builder: new SlashCommandBuilder().addStringOption(new SlashCommandStringOption().setName('locale').setDescription('Choose the locale you want').setRequired(true).setChoices([['english', localeList.ENGLISH]])).setDescription(basicInfo.description).setName(basicInfo.name),
  isAvailable: false,
  permission: BotPermissions.ALL,
  run: async (client, database, ctx) => {
    const requiredPerm = ['ADMINISTRATOR'];

    if (database.user.permission > BotPermissions.ALL || ctx.memberPermissions.has(requiredPerm)) {
      const localeChoise = ctx.options.getString('locale', true);
      const dbRes = await client.database.guilds.update(ctx.guild, {
        locale: localeChoise
      });
      await ctx.editReply(client.localeManager.getLocale(dbRes.locale).reply.language(client, ctx.guild).toOBJECT());
    } else await ctx.editReply(client.localeManager.getLocale(database.guild.locale).error.missingPerms(requiredPerm).toOBJECT());
  }
});
export default langCommand;