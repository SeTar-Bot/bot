import chalk from "chalk";
import Client from "../../Classes/Client";
import Event from "../../Classes/Event";
import { PlayerEvents } from "player-engine/dist/utils/Enums";
const PlayerDisconnectEvent = new Event({
    name: PlayerEvents.DISCONNECT,
    type: 'player',
    isAvailable: true,
    run: async (client: Client, error: any): Promise<void> => {
        console.error(`a Player from Player-Engine disconnected due: `, error);
    }
});

export default PlayerDisconnectEvent;