import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";
import { dbObject } from "../../../../types/database";
import Client from "../../../Classes/Client";
import Command from "../../../Classes/Command";
import { BotPermissions, localeList } from "../../../typings/enums";

const basicInfo = {
    name: 'stats',
    description: 'Get Bot Status'
}

const statsCommand: Command = new Command({
    ...basicInfo,
    builder: new SlashCommandBuilder()
        .setDescription(basicInfo.description)
        .setName(basicInfo.name),
    isAvailable: true,
    permission: BotPermissions.ALL,
    run: async (client: Client, database: dbObject, ctx: CommandInteraction) => {
        await ctx.editReply(client.localeManager.getLocale(database.guild.locale as localeList).reply.stats(client).toOBJECT());
    }
})

export default statsCommand;