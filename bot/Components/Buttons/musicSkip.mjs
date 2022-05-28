import Button from "../../../Classes/Button.mjs";
import { BotPermissions } from "../../../typings/enums.mjs";
const musicPausePlay = new Button({
  name: 'music_skip',
  description: `Skip the playing music to the next one.`,
  isAvailable: true,
  permission: BotPermissions.ALL,
  run: async (client, database, ctx) => {
    const member = await ctx.guild.members.fetch({
      user: ctx.user
    }); // Handle User Errors

    if (!member.voice?.channel) return await ctx.editReply(client.localeManager.getLocale(database.guild.locale).error.NoVoiceChannel().toOBJECT());
    if (ctx.guild.me.voice?.channel && member.voice?.channel !== ctx.guild.me.voice?.channel && ctx.guild.me.voice?.channel?.members?.size > 1) return await ctx.editReply(client.localeManager.getLocale(database.guild.locale).error.BotInUse().toOBJECT());
    if (!client.audioClient.client.connections.has(ctx.guild.id)) return await ctx.editReply(client.localeManager.getLocale(database.guild.locale).error.NothingPlaying().toOBJECT());
    const queue = client.audioClient.getQueue(ctx.guild.id);

    if (queue.nextTracks().length > 0) {
      client.audioClient.client.connections.get(ctx.guild.id)?.dispatcher.stop();
    } else {
      return await ctx.editReply(client.localeManager.getLocale(database.guild.locale).error.player.NoNextTrack().toOBJECT());
    }
  }
});
export default musicPausePlay;