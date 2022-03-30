import Client from "../../Classes/Client";
import Event from "../../Classes/Event";
import { PlayerEvents } from "../../typings/enums";
import { VoiceConnectionState } from "@discordjs/voice";

const PlayerReadyEvent = new Event({
    name: PlayerEvents.CONNECT,
    type: 'player',
    isAvailable: true,
    run: async (client: Client, oldState: VoiceConnectionState, newState: VoiceConnectionState): Promise<void> => {
        console.log(`a player is ready.`);
    }
});

export default PlayerReadyEvent;