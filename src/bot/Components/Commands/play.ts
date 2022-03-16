import { SlashCommandBuilder, SlashCommandStringOption } from "@discordjs/builders";
import { CommandInteraction, MessageButton } from "discord.js";
import { dbObject } from "../../../../types/database";
import Client from "../../../Classes/Client";
import Command from "../../../Classes/Command";
import EmbedBuilder from "../../../Classes/EmbedBuilder";
import { BotPermissions, localeList } from "../../../typings/enums";
import { SoundCloud } from "music-engines";
const basicInfo = {
    name: 'play',
    description: 'Play some music for your self (BETA VERSION)'
}

const infoCommand: Command = new Command({
    ...basicInfo,
    builder: new SlashCommandBuilder()
        .addStringOption(
            new SlashCommandStringOption()
            .setName("input")
            .setDescription("Give me a URL or text to search for")
            .setRequired(true)
        )
        .addStringOption(
            new SlashCommandStringOption()
            .setName("engine")
            .setDescription("What platform you want us to search for music")
            .setRequired(false)
            .addChoices([
                ['YouTube', "YouTube"],
                ["Spotify", "Spotify"],
                ["SoundCloud", "SoundCloud"],
                ["Deezer", "Deezer"]
            ])
        )
        .setDescription(basicInfo.description)
        .setName(basicInfo.name)
        ,
    isAvailable: true,
    permission: BotPermissions.ALL,
    run: async (client: Client, database: dbObject, ctx: CommandInteraction) => {
        try {
            
            await ctx.editReply(client.localeManager.getLocale(database.guild.locale as localeList).reply.info(client).toOBJECT());
        } catch (error) {
            throw error;
        }
    }
})

export default infoCommand;