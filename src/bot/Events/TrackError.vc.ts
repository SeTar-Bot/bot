import { StreamDispatcher } from "dartjs";
import { Client } from "discord.js";
import Event from "../../Classes/Event";

const TrackError = new Event({
    name: 'error',
    type: 'voice',
    isAvailable: true,
    // eslint-disable-next-line
    run: async (client: Client, dispatcher: StreamDispatcher, msg: Error) => {
        console.error(msg);
    }
})

export default TrackError