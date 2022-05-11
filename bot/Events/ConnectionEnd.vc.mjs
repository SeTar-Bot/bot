import Event from "../../Classes/Event.mjs";
const ConnectionEnd = new Event({
  name: 'disconnect',
  type: 'connection',
  runTime: "on",
  isAvailable: true,
  // eslint-disable-next-line
  run: async (client, dispatcher) => {
    console.log(`dartjs: Conneciton is closed now.`);
  }
});
export default ConnectionEnd;