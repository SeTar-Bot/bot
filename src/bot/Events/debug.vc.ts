import { StreamDispatcher } from "dartjs";
import { Client } from "discord.js";
import Event from "../../Classes/Event";

const TrackFinish = new Event({
    name: 'debug',
    type: 'voice',
    runTime: "once",
    isAvailable: false,
    // eslint-disable-next-line
    run: async (client: Client, dispatcher: StreamDispatcher, msg: string) => {
        console.log(`dartjs: `, msg);
    }
})

export default TrackFinish