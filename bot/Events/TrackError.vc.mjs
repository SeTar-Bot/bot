import Event from "../../Classes/Event.mjs";
const TrackError = new Event({
  name: 'error',
  type: 'voice',
  isAvailable: true,
  // eslint-disable-next-line
  run: async (client, dispatcher, msg) => {
    throw msg;
  }
});
export default TrackError;