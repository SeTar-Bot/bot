import { SlashCommandBuilder, SlashCommandStringOption } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";
import { dbObject } from "../../../../types/database";
import Client from "../../../Classes/Client";
import Command from "../../../Classes/Command";
import { BotPermissions, localeList } from "../../../typings/enums";
import { SoundCloud } from "music-engines";
import { SupportedEngines } from "player-engine/dist/typings/Classes/Player";

const basicInfo = {
    name: 'play',
    description: 'Play some music for your self (BETA VERSION)'
}

const playCommand: Command = new Command({
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
    permission: BotPermissions.SUPPORT,
    run: async (client: Client, database: dbObject, ctx: CommandInteraction) => {
        try {
            const input = ctx.options.getString('input', true);
            const engineChoice = ctx.options.getString('engine', false) as SupportedEngines ?? 'YouTube' as SupportedEngines;

            const player = client.playerClient.createPlayer(ctx.guild, {
                engine: engineChoice,
                leaveOnEnd: true,
                selfDeaf: true,
                selfMute: false
            });
            console.log(await player.search(input))
            await ctx.editReply(client.localeManager.getLocale(database.guild.locale as localeList).reply.beta().toOBJECT());
        } catch (error) {
            throw error;
        }
    }
})

export default playCommand;