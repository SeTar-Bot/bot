import { StreamDispatcher } from "dartjs";
import { Client } from "discord.js";
import Event from "../../Classes/Event";

const ConnectionEnd = new Event({
    name: 'debug',
    type: 'connection',
    runTime: "on",
    isAvailable: true,
    // eslint-disable-next-line
    run: async (client: Client, dispatcher: StreamDispatcher, msg: string) => {
        console.log(`dartjs: connection: `, msg);
    }
})

export default ConnectionEnd