import chalk from "chalk";
import Client from "../../Classes/Client";
import Event from "../../Classes/Event";
import { PlayerEvents } from "../../typings/enums";


const PlayerErrorEvent = new Event({
    name: PlayerEvents.ERROR,
    type: 'player',
    isAvailable: true,
    run: async (client: Client, error: any): Promise<void> => {
        console.error(`Error from Player-Engine: `, error);
    }
});

export default PlayerErrorEvent;