import { ButtonInteraction } from "discord.js";
import { dbObject } from "../../../../types/database";
import Button from "../../../Classes/Button";
import Client from "../../../Classes/Client";
import { BotPermissions, localeList } from "../../../typings/enums";

const musicInfoButton: Button = new Button({
    name: 'music_info',
    description: `Show Music Modal`,
    isAvailable: true,
    permission: BotPermissions.ALL,
    run: async (client: Client, database: dbObject, ctx: ButtonInteraction): Promise<any> => {
          await ctx.showModal(client.localeManager.getLocale(database.guild.locale as localeList).modal.info())
    }
});

export default musicInfoButton;