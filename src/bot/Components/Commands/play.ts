import { SlashCommandBuilder, SlashCommandStringOption } from "@discordjs/builders";
import { NoSubscriberBehavior } from "@discordjs/voice";
import { PlayOptions, VoiceConnection } from "dartjs";
import { CommandInteraction } from "discord.js";
import { Deezer, SoundCloud, Spotify, YouTube } from "music-engines";
import { Base } from "music-engines/dist/Base";
import { YTDLStreamOptions } from "music-engines/dist/typings/youtube";
import { dbObject } from "../../../../types/database";
import Client from "../../../Classes/Client";
import Command from "../../../Classes/Command";
import { BotPermissions, localeList } from "../../../typings/enums";

const basicInfo = {
    name: 'play',
    description: 'Play some music for your self (BETA VERSION)'
}

const playCommand: Command = new Command({
    ...basicInfo,
    builder: new SlashCommandBuilder()
        .addStringOption(
            new SlashCommandStringOption()
            .setName("input")
            .setDescription("Give me a URL or text to search for")
            .setRequired(true)
        )
        .addStringOption(
            new SlashCommandStringOption()
            .setName("engine")
            .setDescription("What platform you want us to search for music")
            .setRequired(false)
            .addChoices([
                ['YouTube', "YouTube"],
                ["Spotify", "Spotify"],
                ["SoundCloud", "SoundCloud"],
                ["Deezer", "Deezer"]
            ])
        )
        .setDescription(basicInfo.description)
        .setName(basicInfo.name),
    isAvailable: true,
    permission: BotPermissions.SUPPORT,
    run: async (client: Client, database: dbObject, ctx: CommandInteraction) => {
        // eslint-disable-next-line
        const input = ctx.options.getString('input', true);
        // eslint-disable-next-line
        let engineChoice: "youtube" | "spotify" | "soundcloud" | "deezer" = ctx.options.getString('engine', false) as "youtube" | "spotify" | "soundcloud" | "deezer" ?? 'youtube'
        engineChoice = engineChoice.toLowerCase() as "youtube" | "spotify" | "soundcloud" | "deezer";
        const engine: YouTube | Spotify | SoundCloud | Deezer = client.playerEngines[engineChoice.toLowerCase()]
        const member = await ctx.guild.members.fetch({
            user: ctx.user
        });

        // Handle User Errors
        if(!member.voice?.channel)
            return await ctx.editReply(client.localeManager.getLocale(database.guild.locale as localeList).error.NoVoiceChannel().toOBJECT());

        if(ctx.guild.me.voice?.channel && member.voice?.channel !== ctx.guild.me.voice?.channel)
            return await ctx.editReply(client.localeManager.getLocale(database.guild.locale as localeList).error.NoVoiceChannel().toOBJECT());

        const search = await engine.use(input);
        const track: Base = search[0];

        const connection = client.playerClient.connections.get(ctx.guild.id) ?? await client.playerClient.join(member.voice?.channel, {
            selfDeaf: true,
            selfMute: false,
            group: 'player'
        });

        const streamParams: YTDLStreamOptions = { 
            filter: 'audioonly',
            quality: 'highestaudio',
            highWaterMark: 1 << 24,
            dlChunkSize: 0
        }

        const DispatcherOptions: PlayOptions<{
            ctx: CommandInteraction,
            track: Base,
            connection: VoiceConnection
        }> & { 
            behaviours?: {
                noSubscriber?: NoSubscriberBehavior;
                maxMissedFrames?: number;
            };
        } = {
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
        }

        let stream;

        if(track.isYoutube())
            stream = track.stream(streamParams);
        else if(track.isSpotify())
            stream = await track.stream(streamParams)
        else if(track.isSoundcloud())
            stream = await track.stream()
        else if(track.isDeezer())
            stream = await track.stream()

        const dispatcher = connection.play(stream, DispatcherOptions)
        client.manager.loadEvent("start", "voice", dispatcher);
        client.manager.loadEvent("finish", "voice", dispatcher);
        client.manager.loadEvent("error", "voice", dispatcher);
        client.manager.loadEvent("debug", "voice", dispatcher);
    }
})

export default playCommand;