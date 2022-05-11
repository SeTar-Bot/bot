import { SlashCommandBuilder, SlashCommandStringOption } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";
import { dbObject } from "../../../../types/database";
import Client from "../../../Classes/Client";
import Command from "../../../Classes/Command";
import { BotPermissions, localeList } from "../../../typings/enums";

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
        // eslint-disable-next-line
        const input = ctx.options.getString('input', true);
        // eslint-disable-next-line
        const engineChoice: "youtube" | "spotify" | "soundcloud" | "deezer" = ctx.options.getString('engine', false) as "youtube" | "spotify" | "soundcloud" | "deezer" ?? 'youtube'
        const member = await ctx.guild.members.fetch({
            user: ctx.user
        });

        // Handle User Errors
        if(!member.voice?.channel)
            return await ctx.editReply(client.localeManager.getLocale(database.guild.locale as localeList).error.NoVoiceChannel().toOBJECT());

        if(ctx.guild.me.voice?.channel && member.voice?.channel !== ctx.guild.me.voice?.channel)
            return await ctx.editReply(client.localeManager.getLocale(database.guild.locale as localeList).error.NoVoiceChannel().toOBJECT());

        const search = await client.playerEngines[engineChoice.toLowerCase()].use(input);

        console.log(typeof search, search);

        await ctx.editReply(client.localeManager.getLocale(database.guild.locale as localeList).reply.beta().toOBJECT());
    }
})

export default playCommand;