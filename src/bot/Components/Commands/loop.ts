/* eslint-disable */
import { SlashCommandBuilder, SlashCommandStringOption } from "@discordjs/builders"
import { CommandInteraction } from "discord.js"
import e from "express"
import { dbObject } from "../../../../types/database"
import Client from "../../../Classes/Client"
import Command from "../../../Classes/Command"
import { BotPermissions, localeList } from "../../../typings/enums"

const basicInfo = {
    name: 'loop',
    description: 'Enable Loop mode for playing Musics (BETA VERSION)'
}

const loopCommand: Command = new Command({
    ...basicInfo,
    isAvailable: true,
    permission: BotPermissions.ALL,
    builder: new SlashCommandBuilder()
        .setName(basicInfo.name)
        .setDescription(basicInfo.description)
        .addStringOption(new SlashCommandStringOption()
            .setName('loop_mode')
            .setRequired(false)
            .setDescription('Choose your loop mode.')
            .setChoices([
                ["Queue", "all"],
                ["Current Music", "one"],
                ["None", "none"]
            ])
        ) as SlashCommandBuilder,
    run: async (client: Client, database: dbObject, ctx: CommandInteraction) => {
        const choice: "all" | "one" | "none" = ctx.options.getString("loop_mode") as "all" | "one" | "none" ?? "all"
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
        if(queue.loopMode == choice)
            return await ctx.editReply(client.localeManager.getLocale(database.guild.locale as localeList).reply.player.loop(choice, true).toOBJECT())
        else
        {
            queue.setLoop(choice)
            return await ctx.editReply(client.localeManager.getLocale(database.guild.locale as localeList).reply.player.loop(choice).toOBJECT())
        }
    }
})

export default loopCommand;