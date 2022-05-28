import { NoSubscriberBehavior } from "@discordjs/voice";
import { PlayOptions, StreamDispatcher, VoiceConnection } from "dartjs";
import { CommandInteraction } from "discord.js";
import { Base } from "music-engines";
import { downloadOptions } from "ytdl-core"
import { VoiceData } from "../../../types/classes";
import { dbObject } from "../../../types/database";
import Client from "../../Classes/Client";
import Event from "../../Classes/Event";
import { localeList } from "../../typings/enums";

const TrackFinish = new Event({
    name: 'finish',
    type: 'voice',
    runTime: "once",
    isAvailable: true,
    // eslint-disable-next-line
    run: async (client: Client, dispatcher: StreamDispatcher, data: VoiceData) => {
        const { data: metadata } = data
        const { ctx, connection, database } = metadata;

        const streamParams: downloadOptions = { 
            filter: 'audioonly',
            quality: 'highestaudio',
            highWaterMark: 1 << 25,
            dlChunkSize: 0
        }

        const queue = client.audioClient.getQueue(ctx.guild.id);
        const track = queue.next();

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

        let stream;

        if(track)
        {
            if(track.isYoutube())
                stream = track.stream(streamParams);
            else if(track.isSpotify())
                stream = await track.stream(streamParams)
            else if(track.isSoundcloud())
                stream = await track.stream()
            else if(track.isDeezer())
                stream = await track.stream()

            dispatcher.playStream(stream, DispatcherOptions);
            return await ctx.editReply({content: 'PLAYER FINISHED'});
        }
        else
        {
            connection.disconnect()
            return await ctx.editReply(client.localeManager.getLocale(database.guild.locale as localeList).reply.player.end().toOBJECT())
        }
    }
})

export default TrackFinish