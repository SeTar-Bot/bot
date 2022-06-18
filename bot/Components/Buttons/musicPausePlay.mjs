import Button from "../../../Classes/Button.mjs";
import { BotPermissions } from "../../../typings/enums.mjs";
const musicPausePlay = new Button({
  name: 'music_pp',
  description: `Pause or Plays the Music Player`,
  isAvailable: true,
  permission: BotPermissions.ALL,
  run: async (client, database, ctx) => {
    const member = await ctx?.guild?.members.fetch({
      user: ctx.user
    }); // Handle User Errors

    if (!member?.voice?.channel) return await ctx.editReply(client.localeManager.getLocale(database.guild.locale).error.NoVoiceChannel().toOBJECT());
    if (ctx?.guild?.me?.voice?.channel && member.voice?.channel !== ctx.guild.me.voice?.channel && ctx.guild.me.voice?.channel?.members?.size > 1) return await ctx.editReply(client.localeManager.getLocale(database.guild.locale).error.BotInUse().toOBJECT());
    if (!client.audioClient.client.connections.has(`${ctx?.guild?.id}`)) return await ctx.editReply(client.localeManager.getLocale(database.guild.locale).error.NothingPlaying().toOBJECT());

    if (client.audioClient.client.connections.get(`${ctx?.guild?.id}`)?.dispatcher?.paused) {
      client.audioClient.resume(`${ctx?.guild?.id}`);
      return await ctx.editReply(client.localeManager.getLocale(database.guild.locale).reply.player.resume().toOBJECT());
    } else {
      client.audioClient.pause(`${ctx?.guild?.id}`);
      return await ctx.editReply(client.localeManager.getLocale(database.guild.locale).reply.player.pause().toOBJECT());
    }
  }
});
export default musicPausePlay;