import chalk from "chalk";
import Client from "../../Classes/Client";
import Event from "../../Classes/Event";
import { PlayerEvents } from "player-engine/dist/utils/Enums";
import { PlayerError } from "player-engine/dist/utils";

const PlayerErrorEvent = new Event({
    name: PlayerEvents.ERROR,
    type: 'player',
    isAvailable: false,
    run: async (client: Client, error: any | PlayerError): Promise<void> => {
        console.error(`Error from Player-Engine: `, error);
    }
});

export default PlayerErrorEvent;