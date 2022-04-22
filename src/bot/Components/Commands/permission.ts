import { SlashCommandBuilder, SlashCommandMentionableOption, SlashCommandStringOption, SlashCommandUserOption } from "@discordjs/builders";
import { CommandInteraction, GuildMember, MessageButton, User, UserResolvable } from "discord.js";
import { dbObject, dbUserSchema } from "../../../../types/database";
import Client from "../../../Classes/Client";
import Command from "../../../Classes/Command";
import EmbedBuilder from "../../../Classes/EmbedBuilder";
import { BotPermissions, BotRoles, localeList } from "../../../typings/enums";

const basicInfo = {
    name: 'permission',
    description: 'Change a User Permission'
}

const permCommand: Command = new Command({
    ...basicInfo,
    builder: new SlashCommandBuilder()
        .addUserOption(
            new SlashCommandUserOption()
                .setName('user')
                .setDescription(`User to change permission`)
                .setRequired(true)
        )
        .addStringOption(
            new SlashCommandStringOption()
                .setName(`permission`)
                .setDescription('Permission you want to change to')
                .setRequired(true)
                .setChoices([
                    ['ban', BotPermissions.BAN.toString()],
                    ['member', BotPermissions.ALL.toString()],
                    ['support', BotPermissions.SUPPORT.toString()],
                    ['admin', BotPermissions.ADMIN.toString()]
                ])
        )
        .setDescription(basicInfo.description)
        .setName(basicInfo.name),
    isAvailable: true,
    permission: BotPermissions.ADMIN,
    run: async (client: Client, database: dbObject, ctx: CommandInteraction) => {
        try {
            const mentionedUser = ctx.options.getUser('user', true);
            const targetPerm = Number(ctx.options.getString('permission')) as BotPermissions;
            let targetRole: BotRoles;
            
            const uData: dbUserSchema = await client.database.users.fetch(mentionedUser);
            const res: dbUserSchema = await client.database.users.update(mentionedUser, {
                permission: targetPerm
            });

            switch (targetPerm) {
                case BotPermissions.BAN:
                    targetRole = BotRoles.BAN;
                    break;
                
                case BotPermissions.ALL:
                    targetRole = BotRoles.ALL
                    break;

                case BotPermissions.SUPPORT:
                    targetRole = BotRoles.SUPPORT;
                    break;

                case BotPermissions.ADMIN:
                    targetRole = BotRoles.ADMIN;
                    break;
            }

            if(res)
                ctx.editReply(client.localeManager.getLocale(database.guild.locale as localeList).reply.permission(mentionedUser, targetRole, uData.permission, res.permission).toOBJECT())
            
        } catch (error) {
            throw error;
        }
    }
})

export default permCommand;