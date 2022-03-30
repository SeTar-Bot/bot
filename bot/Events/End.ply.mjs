import Event from "../../Classes/Event.mjs";
import { PlayerEvents } from "player-engine/dist/utils/Enums";
const PlayerEndEvent = new Event({
  name: PlayerEvents.END,
  type: 'player',
  isAvailable: false,
  run: async (client, lastTrack) => {
    console.log(`a player has ended playing music.`);
  }
});
export default PlayerEndEvent;