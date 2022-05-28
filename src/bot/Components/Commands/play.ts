import { SlashCommandBuilder, SlashCommandStringOption } from "@discordjs/builders";
import { NoSubscriberBehavior} from "@discordjs/voice";
import { PlayOptions, VoiceConnection } from "dartjs";
import { CommandInteraction } from "discord.js";
import { Deezer, SoundCloud, Spotify, YouTube } from "music-engines";
import { Base } from "music-engines";
import { downloadOptions } from "ytdl-core"
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
        let engineChoice: "youtube" | "spotify" | "soundcloud" | "deezer" = ctx.options.getString('engine', false) as "youtube" | "spotify" | "soundcloud" | "deezer" ?? 'youtube'
        engineChoice = engineChoice.toLowerCase() as "youtube" | "spotify" | "soundcloud" | "deezer";
        const engine: YouTube | Spotify | SoundCloud | Deezer = client.playerEngines[engineChoice.toLowerCase()]
        const member = await ctx.guild.members.fetch({
            user: ctx.user
        });

        // Handle User Errors
        if(!member.voice?.channel)
            return await ctx.editReply(client.localeManager.getLocale(database.guild.locale as localeList).error.NoVoiceChannel().toOBJECT());

        if(ctx.guild.me.voice?.channel && member.voice?.channel !== ctx.guild.me.voice?.channel && ctx.guild.me.voice?.channel?.members?.size > 1)
            return await ctx.editReply(client.localeManager.getLocale(database.guild.locale as localeList).error.BotInUse().toOBJECT());

        const search = await engine.use(input);
        const track: Base = (Array.isArray(search)) ? search[0] as Base : search as Base;

        const connection = client.playerClient.connections.get(ctx.guild.id) ?? await client.playerClient.join(member.voice?.channel, {
            selfDeaf: true,
            selfMute: false,
            group: 'player'
        });

        client.manager.loadEvent("disconnect", "connection", connection)
        client.manager.loadEvent("debug", "connection", connection)
        client.manager.loadEvent("error", "connection", connection)

        const streamParams: downloadOptions = { 
            filter: 'audioonly',
            quality: 'highestaudio',
            highWaterMark: 1 << 25,
            dlChunkSize: 0
        }

        const DispatcherOptions: PlayOptions<{
            ctx: CommandInteraction,
            track: Base,
            connection: VoiceConnection,
            database: dbObject
        }> & { 
            behaviours?: {
                noSubscriber?: NoSubscriberBehavior;
                maxMissedFrames?: number;
            };
        } = {
            metadata: {
                ctx,
                track,
                connection,
                database,
            },
            behaviours: {
                noSubscriber: NoSubscriberBehavior.Stop
            },
            inlineVolume: true,
            initialVolume: 100 / 100
        }

        const queue = client.audioClient.getQueue(ctx.guild.id) ?? client.audioClient.createQueue(ctx.guild.id);
        let stream;

        if(track.isYoutube())
            stream = track.stream(streamParams);
        else if(track.isSpotify())
            stream = await track.stream(streamParams)
        else if(track.isSoundcloud())
            stream = await track.stream()
        else if(track.isDeezer())
            stream = await track.stream()

        queue.addTracks([track])

        if(!connection.dispatcher)
        {
            const dispatcher = connection.play(stream, DispatcherOptions);
            client.manager.loadEvent("start", "voice", dispatcher);
            client.manager.loadEvent("finish", "voice", dispatcher);
            client.manager.loadEvent("error", "voice", dispatcher);
            client.manager.loadEvent("debug", "voice", dispatcher);
        }
        else
        {
            await ctx.editReply({content: 'ADDED TO QUEUE'})
        }
    }
})

export default playCommand;