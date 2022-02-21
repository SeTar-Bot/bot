import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction, MessageButton } from "discord.js";
import { dbObject } from "../../../../types/database";
import Client from "../../../Classes/Client";
import Command from "../../../Classes/Command";
import EmbedBuilder from "../../../Classes/EmbedBuilder";
import { BotPermissions, localeList } from "../../../typings/enums";

const basicInfo = {
    name: 'invite',
    description: 'Get Bot Invite Link and Enjoy Playing Music :)'
}

const inviteCommand: Command = new Command({
    ...basicInfo,
    builder: new SlashCommandBuilder()
        .setDescription(basicInfo.description)
        .setName(basicInfo.name),
    isAvailable: true,
    permission: BotPermissions.ALL,
    run: async (client: Client, database: dbObject, ctx: CommandInteraction) => {
        try {
            await ctx.editReply(client.localeManager.getLocale(database.guild.locale as localeList).reply.invite().toOBJECT());
        } catch (error) {
            throw error;   
        }
    }
})

export default inviteCommand;