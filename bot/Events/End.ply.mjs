import Event from "../../Classes/Event.mjs";
import { PlayerEvents } from "../../typings/enums.mjs";
const PlayerEndEvent = new Event({
  name: PlayerEvents.END,
  type: 'player',
  isAvailable: true,
  run: async (client, lastTrack) => {
    console.log(`a player has ended playing music.`);
  }
});
export default PlayerEndEvent;