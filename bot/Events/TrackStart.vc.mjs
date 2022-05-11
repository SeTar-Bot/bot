import Event from "../../Classes/Event.mjs";
const TrackStart = new Event({
  name: 'start',
  type: 'voice',
  runTime: "once",
  isAvailable: true,
  // eslint-disable-next-line
  run: async (client, dispatcher, data) => {
    const {
      ctx
    } = data.data;
    return await ctx.editReply({
      content: 'PLAYER STARTED'
    });
  }
});
export default TrackStart;