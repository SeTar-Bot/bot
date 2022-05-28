import { NoSubscriberBehavior } from "@discordjs/voice";
import Event from "../../Classes/Event.mjs";
const TrackFinish = new Event({
  name: 'finish',
  type: 'voice',
  runTime: "once",
  isAvailable: true,
  // eslint-disable-next-line
  run: async (client, dispatcher, data) => {
    const {
      data: metadata
    } = data;
    const {
      ctx,
      connection,
      database
    } = metadata;
    const streamParams = {
      filter: 'audioonly',
      quality: 'highestaudio',
      highWaterMark: 1 << 25,
      dlChunkSize: 0
    };
    const queue = client.audioClient.getQueue(ctx.guild.id);
    const track = queue.next();
    const DispatcherOptions = {
      metadata: {
        ctx,
        track,
        connection,
        database
      },
      behaviours: {
        noSubscriber: NoSubscriberBehavior.Stop
      },
      inlineVolume: true,
      initialVolume: 100 / 100
    };
    let stream;

    if (track) {
      if (track.isYoutube()) stream = track.stream(streamParams);else if (track.isSpotify()) stream = await track.stream(streamParams);else if (track.isSoundcloud()) stream = await track.stream();else if (track.isDeezer()) stream = await track.stream();
      dispatcher.playStream(stream, DispatcherOptions);
      return await ctx.editReply({
        content: 'PLAYER FINISHED'
      });
    } else {
      connection.disconnect();
      return await ctx.editReply(client.localeManager.getLocale(database.guild.locale).reply.player.end().toOBJECT());
    }
  }
});
export default TrackFinish;