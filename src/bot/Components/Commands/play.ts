import { SlashCommandBuilder, SlashCommandStringOption } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";
import { dbObject } from "../../../../types/database";
import Client from "../../../Classes/Client";
import Command from "../../../Classes/Command";
import { BotPermissions, localeList } from "../../../typings/enums";
import { SoundCloud } from "music-engines";
import { SupportedEngines } from "player-engine/dist/typings/Classes/Player";
import { PlayerTrack } from "player-engine";
import { APIInteractionGuildMember } from "discord-api-types/v9";
import { VoiceConnection } from "@discordjs/voice";

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
            const member = await ctx.guild.members.fetch({
                user: ctx.user
            });

            // Handle User Errors
            if(!member.voice?.channel)
                return await ctx.editReply(client.localeManager.getLocale(database.guild.locale as localeList).error.NoVoiceChannel().toOBJECT());

            if(ctx.guild.me.voice?.channel && member.voice?.channel !== ctx.guild.me.voice?.channel)
                return await ctx.editReply(client.localeManager.getLocale(database.guild.locale as localeList).error.NoVoiceChannel().toOBJECT());

            const player = client.playerClient.createPlayer(ctx.guild, {
                engine: engineChoice,
                leaveOnEnd: true,
                selfDeaf: true,
                selfMute: false
            });
            
            const song: PlayerTrack = await player.search(input) as PlayerTrack;
            const connection: VoiceConnection = player.connection(member.voice?.channel) as VoiceConnection;
            
            if(!connection)
                return await ctx.editReply(client.localeManager.getLocale(database.guild.locale as localeList).error.noContent().toOBJECT({ ephemeral: true }));
            
            await player.play([song], ctx);

            await ctx.editReply(client.localeManager.getLocale(database.guild.locale as localeList).reply.beta().toOBJECT());
        } catch (error) {
            throw error;
        }
    }
})

export default playCommand;