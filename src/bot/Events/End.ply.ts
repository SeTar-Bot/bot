import chalk from "chalk";
import Client from "../../Classes/Client";
import Event from "../../Classes/Event";
import { PlayerTrack } from "player-engine";
import { Interaction } from "discord.js";
import { PlayerEvents } from "../../typings/enums";

const PlayerEndEvent = new Event({
    name: PlayerEvents.END,
    type: 'player',
    isAvailable: true,
    run: async (client: Client, lastTrack: PlayerTrack): Promise<void> => {
        console.log(`a player has ended playing music.`);
    }
});

export default PlayerEndEvent;