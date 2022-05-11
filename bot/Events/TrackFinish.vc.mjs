import Event from "../../Classes/Event.mjs";
const TrackFinish = new Event({
  name: 'finish',
  type: 'voice',
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
export default TrackFinish;