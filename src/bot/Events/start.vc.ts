import { StreamDispatcher } from "dartjs";
import { VoiceData } from "../../../types/classes";
import Client from "../../Classes/Client";
import Event from "../../Classes/Event";
import { localeList } from "../../typings/enums";

const TrackStart = new Event({
    name: 'start',
    type: 'voice',
    runTime: "once",
    isAvailable: true,
    // eslint-disable-next-line
    run: async (client: Client, dispatcher: StreamDispatcher, data: VoiceData) => {
        const { data: metadata } = data;
        const { ctx, database } = metadata;
        return await ctx.editReply(client.localeManager.getLocale(database.guild.locale as localeList).reply.player.start(data.data).toOBJECT());
    }
})

export default TrackStart