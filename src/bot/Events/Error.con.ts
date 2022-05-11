import { StreamDispatcher } from "dartjs";
import { Client } from "discord.js";
import Event from "../../Classes/Event";

const ConnectionError = new Event({
    name: 'error',
    type: 'connection',
    runTime: "on",
    isAvailable: true,
    // eslint-disable-next-line
    run: async (client: Client, dispatcher: StreamDispatcher, e: Error) => {
        console.error(e);
    }
})

export default ConnectionError