import { SlashCommandBuilder, SlashCommandStringOption } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";
import { dbObject } from "../../../../types/database";
import Client from "../../../Classes/Client";
import Command from "../../../Classes/Command";
import { BotPermissions, CacheTypes, localeList } from "../../../typings/enums";
import os from "os";

const basicInfo = {
    name: 'cache',
    description: 'Manage Bot Caches to save up memory'
}

const cacheCommand: Command = new Command({
    ...basicInfo,
    builder: new SlashCommandBuilder()
        .addStringOption(
            new SlashCommandStringOption()
                .setName('cache_type')
                .setDescription(`Which cache you wanna sweep out?`)
                .setRequired(true)
                .setChoices([
                    ['All', CacheTypes.ALL],
                    ['Bans', CacheTypes.BAN],
                    ['Database Guilds', CacheTypes.DB_GUILDS],
                    ['Database Users', CacheTypes.DB_USERS],
                    ['Emojies', CacheTypes.EMOJI],
                    ['Invites', CacheTypes.INVITE],
                    ['Guild Members', CacheTypes.MEMBER],
                    ['Messages', CacheTypes.MESSAGE],
                    ['User Presences', CacheTypes.PRESENCE],
                    ['Reactions', CacheTypes.REACTION],
                    ['Stage Instances', CacheTypes.STAGE],
                    ['Threads', CacheTypes.THREAD],
                    ['Thread Members', CacheTypes.THREAD_MEMBER],
                    ['Users', CacheTypes.USERS],
                    ['Voice States', CacheTypes.VOICESTATES]
                ])
        )
        .setDescription(basicInfo.description)
        .setName(basicInfo.name),
    isAvailable: true,
    permission: BotPermissions.ADMIN,
    run: async (client: Client, database: dbObject, ctx: CommandInteraction) => {
        try {
            const choice = ctx.options.getString('cache_type', true);
            const result = client.clean(choice as CacheTypes);

            await ctx.editReply(client.localeManager.getLocale(database.guild.locale as localeList).reply.cache(choice as CacheTypes, result).toOBJECT())

        } catch (error) {
            throw error;
        }
    }
})

export default cacheCommand;