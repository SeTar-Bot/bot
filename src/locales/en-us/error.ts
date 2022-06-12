import { MessageButton, PermissionResolvable } from "discord.js";
import { localeErrors } from "../../../types/localeSchema";
import botOptions from "../../bot/Config/botOptions";
import EmbedBuilder from "../../Classes/EmbedBuilder";
import { BotPermissions } from "../../typings/enums";

const en_usErrors: localeErrors = {

    permission: (): EmbedBuilder => new EmbedBuilder()
        .setTitle(`❌ Ooopsie...`)
        .setDescription(`Sorry but looks like i have a missing permission on this server,\nPlease try again and invite me with the Button below!`)
        .setFooter({
            text: `Setar-Bot © ${new Date().getFullYear().toString()}`
        })
        .addComponent([
            new MessageButton()
                .setStyle('LINK')
                .setURL(botOptions.inviteURL)
                .setLabel(`Invite`)
                .setEmoji(`858816260418568223`)
        ]),

    internal: (): EmbedBuilder => new EmbedBuilder()
        .setTitle(`❌ Ooopsie...`)
        .setDescription(`**[500]** Internal Server error has accured\nError will be reported to Developers.`)
        .setFooter({
            text: `Setar-Bot © ${new Date().getFullYear().toString()}`
        })
        .addComponent([
            new MessageButton()
                .setStyle(`LINK`)
                .setURL(botOptions.supportURL)
                .setLabel(`Support`)
                .setEmoji(`858816253422862347`)
        ]),

    noContent: (): EmbedBuilder => new EmbedBuilder()
        .setTitle(`❌ Ooopsie...`)
        .setDescription(`**[204]** There is no content for this command or the command has been disabled.`)
        .setFooter({
            text: `Setar-Bot © ${new Date().getFullYear().toString()}`
        })
        .addComponent([
            new MessageButton()
                .setStyle(`LINK`)
                .setURL(botOptions.supportURL)
                .setLabel(`Support`)
                .setEmoji(`858816253422862347`)
        ]),

    missingPerm: (userPerm: BotPermissions): EmbedBuilder => new EmbedBuilder()
        .setTitle(`❌ Ooopsie...`)
        .setDescription((userPerm == BotPermissions.BAN) ? `Looks like you have been banned from Using the Bot\nYou can feel free to ask about supports for more information.` : `Looks like this command requires more permission than you have`)
        .setFooter({
            text: `Setar-Bot © ${new Date().getFullYear().toString()}`
        })
        .addComponent([
            new MessageButton()
                .setStyle(`LINK`)
                .setURL(botOptions.supportURL)
                .setLabel(`Support`)
                .setEmoji(`858816253422862347`)
        ]),

    missingPerms: (perms: PermissionResolvable): EmbedBuilder => new EmbedBuilder()
        .setTitle(`❌ Ooopsie...`)
        .setDescription(`Sorry, this command required some specific Permissions to be executed`)
        .setFooter({
            text: `Setar-Bot © ${new Date().getFullYear().toString()}`
        })
        .setFields([
            {
                inline: false,
                name: 'Specified Permissions',
                value: perms.toString()
            }
        ]),

    invalidURl: (statusCode?: number): EmbedBuilder => new EmbedBuilder()
        .setTitle(`❌ Ooopsie...`)
        .setDescription((statusCode !== 200) ? `Sorry, but the URl is invalid, Supported URL's are only Github Gist and Pastebin.` : `Sorry, Request has been failed with Error code of \`${statusCode}\``)
        .setFooter({
            text: `Setar-Bot © ${new Date().getFullYear().toString()}`
        }),

    NoVoiceChannel: (): EmbedBuilder => new EmbedBuilder()
        .setTitle(`❌ Ooopsie...`)
        .setDescription(`Try joining a voice channel and try again.`)
        .setFooter({
            text: `Setar-Bot © ${new Date().getFullYear().toString()}`
        }),

    BotInUse: (): EmbedBuilder => new EmbedBuilder()
        .setTitle(`❌ Ooopsie...`)
        .setDescription(`Bot is playing music in other channel at the moment, maybe join us? 🤔`)
        .setFooter({
            text: `Setar-Bot © ${new Date().getFullYear().toString()}`
        }),

    NothingPlaying: (): EmbedBuilder => new EmbedBuilder()
        .setTitle(`❌ Ooopsie...`)
        .setDescription(`Bot is not playing anything, maybe start listening to music? 🤔`)
        .setFooter({
            text: `Setar-Bot © ${new Date().getFullYear().toString()}`
        }),

    player: {
        AlreadyPaused: () => new EmbedBuilder()
            .setTitle(`❌ Ooopsie...`)
            .setDescription(`Music is already paused.`)
            .setFooter({
                text: `Setar-Bot © ${new Date().getFullYear().toString()}`
            }),
        AlreadyResumed: () => new EmbedBuilder()
            .setTitle(`❌ Ooopsie...`)
            .setDescription(`Bot is already playing music, maybe turn the volume up? 🤔`)
            .setFooter({
                text: `Setar-Bot © ${new Date().getFullYear().toString()}`
            }),

        NoNextTrack: () => new EmbedBuilder()
            .setTitle(`❌ Ooopsie...`)
            .setDescription('There is no other music to skip to, maybe try adding more to the queue first.')
            .setFooter({
                text: `Setar-Bot © ${new Date().getFullYear().toString()}`
            })
    }

};

export default en_usErrors;
