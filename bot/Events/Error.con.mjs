import Event from "../../Classes/Event.mjs";
const ConnectionError = new Event({
  name: 'error',
  type: 'connection',
  runTime: "on",
  isAvailable: true,
  // eslint-disable-next-line
  run: async (client, dispatcher, e) => {
    console.error(e);
  }
});
export default ConnectionError;