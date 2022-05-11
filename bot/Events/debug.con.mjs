import Event from "../../Classes/Event.mjs";
const ConnectionDebug = new Event({
  name: 'debug',
  type: 'connection',
  runTime: "on",
  isAvailable: true,
  // eslint-disable-next-line
  run: async (client, dispatcher, msg) => {
    console.log(`dartjs: connection: `, msg);
  }
});
export default ConnectionDebug;