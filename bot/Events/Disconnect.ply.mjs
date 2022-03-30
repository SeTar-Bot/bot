import Event from "../../Classes/Event.mjs";
import { PlayerEvents } from "player-engine/dist/utils/Enums";
const PlayerDisconnectEvent = new Event({
  name: PlayerEvents.DISCONNECT,
  type: 'player',
  isAvailable: true,
  run: async (client, error) => {
    console.error(`a Player from Player-Engine disconnected due: `, error);
  }
});
export default PlayerDisconnectEvent;