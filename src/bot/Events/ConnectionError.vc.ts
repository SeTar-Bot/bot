import { StreamDispatcher } from "dartjs";
import { Client } from "discord.js";
import Event from "../../Classes/Event";

const ConnectionEnd = new Event({
    name: 'error',
    type: 'connection',
    runTime: "on",
    isAvailable: true,
    // eslint-disable-next-line
    run: async (client: Client, dispatcher: StreamDispatcher, e: Error) => {
        console.warn(e);
    }
})

export default ConnectionEnd