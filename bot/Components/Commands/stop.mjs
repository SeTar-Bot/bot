import { SlashCommandBuilder } from "@discordjs/builders";
import Command from "../../../Classes/Command.mjs";
import { BotPermissions } from "../../../typings/enums.mjs";
const basicInfo = {
  name: 'stop',
  description: 'Stops the whole Music Player & destroys Queue.'
};
const stopCommand = new Command({ ...basicInfo,
  isAvailable: true,
  permission: BotPermissions.ALL,
  builder: new SlashCommandBuilder().setName(basicInfo.name).setDescription(basicInfo.description),
  run: async (client, database, ctx) => {
    const member = await ctx.guild.members.fetch({
      user: ctx.user
    }); // Handle User Errors

    if (!member.voice?.channel) return await ctx.editReply(client.localeManager.getLocale(database.guild.locale).error.NoVoiceChannel().toOBJECT());
    if (ctx.guild.me.voice?.channel && member.voice?.channel !== ctx.guild.me.voice?.channel && ctx.guild.me.voice?.channel?.members?.size > 1) return await ctx.editReply(client.localeManager.getLocale(database.guild.locale).error.BotInUse().toOBJECT());
    if (!client.audioClient.client.connections.has(ctx.guild.id)) return await ctx.editReply(client.localeManager.getLocale(database.guild.locale).error.NothingPlaying().toOBJECT());
    client.audioClient.stop(ctx.guild.id);
    return await ctx.editReply(client.localeManager.getLocale(database.guild.locale).reply.player.end().toOBJECT());
  }
});
export default stopCommand;