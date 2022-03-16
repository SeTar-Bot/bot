import Event from "../../Classes/Event.mjs";
import { PlayerEvents } from "player-engine/dist/utils/Enums";
const PlayerErrorEvent = new Event({
  name: PlayerEvents.ERROR,
  type: 'player',
  isAvailable: true,
  run: async (client, error) => {
    console.error(`Error from Player-Engine: `, error);
  }
});
export default PlayerErrorEvent;