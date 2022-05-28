import { SlashCommandBuilder } from "@discordjs/builders"
import { CommandInteraction } from "discord.js"
import { dbObject } from "../../../../types/database"
import Client from "../../../Classes/Client"
import Command from "../../../Classes/Command"
import { BotPermissions, localeList } from "../../../typings/enums"

const basicInfo = {
    name: 'skip',
    description: 'Skip to the Next music in Queue'
}
const skipCommand: Command = new Command({
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
            
        const queue = client.audioClient.getQueue(ctx.guild.id);
        if(queue.nextTracks().length > 0)
        {
            client.audioClient.client.connections.get(ctx.guild.id)?.dispatcher.stop()
        }
        else
        {
            return await ctx.editReply(client.localeManager.getLocale(database.guild.locale as localeList).error.player.NoNextTrack().toOBJECT())
        }
    }
})

export default skipCommand;