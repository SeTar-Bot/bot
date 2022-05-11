import { SlashCommandBuilder } from "@discordjs/builders"
import { CommandInteraction } from "discord.js"
import { dbObject } from "../../../../types/database"
import Client from "../../../Classes/Client"
import Command from "../../../Classes/Command"
import { BotPermissions, localeList } from "../../../typings/enums"

const basicInfo = {
    name: 'resume',
    description: 'Resume the playing music (BETA VERSION)'
}
const resumeCommand: Command = new Command({
    ...basicInfo,
    isAvailable: true,
    permission: BotPermissions.ALL,
    builder: new SlashCommandBuilder()
        .setName(basicInfo.name)
        .setDescription(basicInfo.description),
    run: async (client: Client, database: dbObject, ctx: CommandInteraction) => {
        const member = await ctx.guild.members.fetch({
            user: ctx.user
        });

        // Handle User Errors
        if(!member.voice?.channel)
            return await ctx.editReply(client.localeManager.getLocale(database.guild.locale as localeList).error.NoVoiceChannel().toOBJECT());

        if(ctx.guild.me.voice?.channel && member.voice?.channel !== ctx.guild.me.voice?.channel && ctx.guild.me.voice?.channel?.members?.size > 1)
            return await ctx.editReply(client.localeManager.getLocale(database.guild.locale as localeList).error.BotInUse().toOBJECT());

        if(!client.audioClient.client.connections.has(ctx.guild.id))
            return await ctx.editReply(client.localeManager.getLocale(database.guild.locale as localeList).error.NothingPlaying().toOBJECT());

        if(client.audioClient.client.connections.get(ctx.guild.id)?.dispatcher?.paused)
            return await ctx.editReply(client.localeManager.getLocale(database.guild.locale as localeList).error.player.AlreadyResumed().toOBJECT());
        
        client.audioClient.resume(ctx.guild.id);
        return await ctx.editReply(client.localeManager.getLocale(database.guild.locale as localeList).reply.player.resume().toOBJECT())
    }
})

export default resumeCommand;