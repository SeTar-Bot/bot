import { SlashCommandBuilder, SlashCommandStringOption } from "@discordjs/builders";
import { NoSubscriberBehavior } from "@discordjs/voice";
import Command from "../../../Classes/Command.mjs";
import { BotPermissions } from "../../../typings/enums.mjs";
const basicInfo = {
  name: 'play',
  description: 'Play some music for your self (BETA VERSION)'
};
const playCommand = new Command({ ...basicInfo,
  builder: new SlashCommandBuilder().addStringOption(new SlashCommandStringOption().setName("input").setDescription("Give me a URL or text to search for").setRequired(true)).addStringOption(new SlashCommandStringOption().setName("engine").setDescription("What platform you want us to search for music").setRequired(false).addChoices([['YouTube', "YouTube"], ["Spotify", "Spotify"], ["SoundCloud", "SoundCloud"], ["Deezer", "Deezer"]])).setDescription(basicInfo.description).setName(basicInfo.name),
  isAvailable: true,
  permission: BotPermissions.SUPPORT,
  run: async (client, database, ctx) => {
    // eslint-disable-next-line
    const input = ctx.options.getString('input', true); // eslint-disable-next-line

    let engineChoice = ctx.options.getString('engine', false) ?? 'youtube';
    engineChoice = engineChoice.toLowerCase();
    const engine = client.playerEngines[engineChoice.toLowerCase()];
    const member = await ctx.guild.members.fetch({
      user: ctx.user
    }); // Handle User Errors

    if (!member.voice?.channel) return await ctx.editReply(client.localeManager.getLocale(database.guild.locale).error.NoVoiceChannel().toOBJECT());
    if (ctx.guild.me.voice?.channel && member.voice?.channel !== ctx.guild.me.voice?.channel) return await ctx.editReply(client.localeManager.getLocale(database.guild.locale).error.NoVoiceChannel().toOBJECT());
    const search = await engine.use(input);
    const track = search[0];
    const connection = client.playerClient.connections.get(ctx.guild.id) ?? (await client.playerClient.join(member.voice?.channel, {
      selfDeaf: true,
      selfMute: false,
      group: 'player'
    }));
    const DispatcherOptions = {
      metadata: {
        ctx,
        track,
        connection
      },
      behaviours: {
        noSubscriber: NoSubscriberBehavior.Stop,
        maxMissedFrames: 25
      },
      inlineVolume: true,
      initialVolume: 100 / 100,
      ignorePrevious: true
    };
    let stream;
    if (track.isYoutube()) stream = track.stream({
      dlChunkSize: 0
    });else if (track.isSpotify()) stream = await track.stream({
      dlChunkSize: 0
    });else if (track.isSoundcloud()) stream = await track.stream();else if (track.isDeezer()) stream = await track.stream();
    const dispatcher = connection.play(stream, DispatcherOptions);
    client.manager.loadEvent("start", "voice", dispatcher);
  }
});
export default playCommand;