import { StreamDispatcher } from "dartjs";
import { Client } from "discord.js";
import { VoiceData } from "../../../types/classes";
import Event from "../../Classes/Event";

const TrackStart = new Event({
    name: 'start',
    type: 'voice',
    runTime: "once",
    isAvailable: true,
    // eslint-disable-next-line
    run: async (client: Client, dispatcher: StreamDispatcher, data: VoiceData) => {
        const { ctx } = data.data;
        return await ctx.editReply({content: 'PLAYER STARTED'});
    }
})

export default TrackStart