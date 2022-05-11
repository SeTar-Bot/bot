import Event from "../../Classes/Event.mjs";
const TrackStart = new Event({
  name: 'start',
  type: 'voice',
  isAvailable: true,
  // eslint-disable-next-line
  run: async (client, dispatcher, data) => {
    const {
      ctx
    } = data.metadata;
    return await ctx.editReply({
      content: 'PLAYER STARTED'
    });
  }
});
export default TrackStart;