import { SlashCommandBuilder, SlashCommandStringOption } from "@discordjs/builders";
import { CommandInteraction, PermissionResolvable } from "discord.js";
import { dbGuildSchema, dbObject } from "../../../../types/database";
import Client from "../../../Classes/Client";
import Command from "../../../Classes/Command";
import { BotPermissions, localeList } from "../../../typings/enums";

const basicInfo = {
    name: 'language',
    description: 'Change Bot Language for your Server.'
}

const langCommand: Command = new Command({
    ...basicInfo,
    builder: new SlashCommandBuilder()
        .addStringOption(
            new SlashCommandStringOption()
                .setName('locale')
                .setDescription('Choose the locale you want')
                .setRequired(true)
                .setChoices([
                    ['english', localeList.ENGLISH],
                ])
        )
        .setDescription(basicInfo.description)
        .setName(basicInfo.name),
    isAvailable: false,
    permission: BotPermissions.ALL,
    run: async (client: Client, database: dbObject, ctx: CommandInteraction) => {
        const requiredPerm: PermissionResolvable = ['ADMINISTRATOR'];
        if(database.user.permission > BotPermissions.ALL || ctx.memberPermissions.has(requiredPerm))
        {
            const localeChoise = ctx.options.getString('locale', true);
            const dbRes: dbGuildSchema = await client.database.guilds.update(ctx.guild, {
                locale: localeChoise
            }) as dbGuildSchema;
                
            await ctx.editReply(client.localeManager.getLocale(dbRes.locale as localeList).reply.language(client, ctx.guild).toOBJECT())
        }
        else
            await ctx.editReply(client.localeManager.getLocale(database.guild.locale as localeList).error.missingPerms(requiredPerm).toOBJECT());
    }
})

export default langCommand;