import Event from "../../Classes/Event.mjs";
const TrackFinish = new Event({
  name: 'debug',
  type: 'voice',
  runTime: "once",
  isAvailable: true,
  // eslint-disable-next-line
  run: async (client, dispatcher, msg) => {
    console.log(`dartjs: `, msg);
  }
});
export default TrackFinish;