import { StreamDispatcher } from "dartjs";
import { Client } from "discord.js";
import Event from "../../Classes/Event";

const ConnectionDC = new Event({
    name: 'disconnect',
    type: 'connection',
    runTime: "on",
    isAvailable: true,
    // eslint-disable-next-line
    run: async (client: Client, dispatcher: StreamDispatcher) => {
        console.log(`dartjs: Conneciton is closed now.`);
    }
})

export default ConnectionDC