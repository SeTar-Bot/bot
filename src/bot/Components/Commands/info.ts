import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";
import { dbObject } from "../../../../types/database";
import Client from "../../../Classes/Client";
import Command from "../../../Classes/Command";
import { BotPermissions, localeList } from "../../../typings/enums";

const basicInfo = {
    name: 'info',
    description: 'Get Information About the Bot and Developers'
}

const infoCommand: Command = new Command({
    ...basicInfo,
    builder: new SlashCommandBuilder()
        .setDescription(basicInfo.description)
        .setName(basicInfo.name),
    isAvailable: true,
    permission: BotPermissions.ALL,
    run: async (client: Client, database: dbObject, ctx: CommandInteraction) => {
        await ctx.editReply(client.localeManager.getLocale(database.guild.locale as localeList).reply.info(client).toOBJECT());
    }
})

export default infoCommand;