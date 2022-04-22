import { SlashCommandBuilder, SlashCommandStringOption } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";
import { dbObject } from "../../../../types/database";
import Client from "../../../Classes/Client";
import Command from "../../../Classes/Command";
import { BotPermissions, localeList } from "../../../typings/enums";
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
        .setName(basicInfo.name),
    isAvailable: true,
    permission: BotPermissions.SUPPORT,
    run: async (client: Client, database: dbObject, ctx: CommandInteraction) => {
        try {
            const input = ctx.options.getString('input', true);
            const engineChoice = ctx.options.getString('engine', false) as SupportedEngines ?? 'YouTube' as SupportedEngines;
            const member = await ctx.guild.members.fetch({
                user: ctx.user
            });

            // Handle User Errors
            if(!member.voice?.channel)
                return await ctx.editReply(client.localeManager.getLocale(database.guild.locale as localeList).error.NoVoiceChannel().toOBJECT());

            if(ctx.guild.me.voice?.channel && member.voice?.channel !== ctx.guild.me.voice?.channel)
                return await ctx.editReply(client.localeManager.getLocale(database.guild.locale as localeList).error.NoVoiceChannel().toOBJECT());

            const search = await client.playerEngines.youtube.use('Shayea', {
                type: 'video',
                format: true,
                limit: 1
            });

            console.log(typeof search, search);

            await ctx.editReply(client.localeManager.getLocale(database.guild.locale as localeList).reply.beta().toOBJECT());
        } catch (error) {
            throw error;
        }
    }
})

export default playCommand;