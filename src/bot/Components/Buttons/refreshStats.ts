import { ButtonInteraction } from "discord.js";
import { dbObject } from "../../../../types/database";
import Button from "../../../Classes/Button";
import Client from "../../../Classes/Client";
import { BotPermissions, localeList } from "../../../typings/enums";

const refreshStatsButton: Button = new Button({
    name: 'refreshStats',
    description: `Refresh the Stats`,
    isAvailable: false,
    permission: BotPermissions.ALL,
    run: async (client: Client, database: dbObject, ctx: ButtonInteraction): Promise<any> => {
        const msg = client.localeManager.getLocale(database.guild.locale as localeList).reply.stats(client);
        msg.ActionRows = [];
        await ctx.deferUpdate();
        await ctx.update(msg.toOBJECT())  
    }
});

export default refreshStatsButton;