import { SlashCommandBuilder, SlashCommandStringOption } from "@discordjs/builders";
import Command from "../../../Classes/Command.mjs";
import { BotPermissions, CacheTypes } from "../../../typings/enums.mjs";
const basicInfo = {
  name: 'cache',
  description: 'Manage Bot Caches to save up memory'
};
const cacheCommand = new Command({ ...basicInfo,
  builder: new SlashCommandBuilder().addStringOption(new SlashCommandStringOption().setName('cache_type').setDescription(`Which cache you wanna sweep out?`).setRequired(true).setChoices([['All', CacheTypes.ALL], ['Bans', CacheTypes.BAN], ['Database Guilds', CacheTypes.DB_GUILDS], ['Database Users', CacheTypes.DB_USERS], ['Emojies', CacheTypes.EMOJI], ['Invites', CacheTypes.INVITE], ['Guild Members', CacheTypes.MEMBER], ['Messages', CacheTypes.MESSAGE], ['User Presences', CacheTypes.PRESENCE], ['Reactions', CacheTypes.REACTION], ['Stage Instances', CacheTypes.STAGE], ['Threads', CacheTypes.THREAD], ['Thread Members', CacheTypes.THREAD_MEMBER], ['Users', CacheTypes.USERS], ['Voice States', CacheTypes.VOICESTATES]])).setDescription(basicInfo.description).setName(basicInfo.name),
  isAvailable: true,
  permission: BotPermissions.ADMIN,
  run: async (client, database, ctx) => {
    const choice = ctx.options.getString('cache_type', true);
    const result = client.clean(choice);
    await ctx.editReply(client.localeManager.getLocale(database.guild.locale).reply.cache(choice, result).toOBJECT());
  }
});
export default cacheCommand;