import Event from "../../Classes/Event.mjs";
const TrackStart = new Event({
  name: 'start',
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
      database
    } = metadata;
    return await ctx.editReply(client.localeManager.getLocale(database.guild.locale).reply.player.start(data.data).toOBJECT());
  }
});
export default TrackStart;