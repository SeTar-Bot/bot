import { Guild, MessageButton, User } from "discord.js";
import { type } from "os";
import { CacheTypeResult, VoiceMetadata } from "../../../types/classes";
import { localeReplies } from "../../../types/localeSchema";
import botOptions from "../../bot/Config/botOptions";
import Client from "../../Classes/Client";
import EmbedBuilder from "../../Classes/EmbedBuilder";
import { BotPermissions, BotRoles, CacheTypes } from "../../typings/enums";

const en_usReplies: localeReplies = {

    player: {
        start: (data: VoiceMetadata): EmbedBuilder => (data.track.isYoutube() || data.track.isSpotify() || data.track.isSoundcloud() || data.track.isDeezer()) ? new EmbedBuilder()
            .setAuthor({
                iconURL: 'https://cdn.discordapp.com/attachments/677188998195839003/721441574784860211/music-gif-png-7-original.gif',
                name: `Playing ${data.track.title}`,
                url: data.track.url
            })
            .addFields([
                {
                    name: `Duration`,
                    value: data.track.duration.format,
                    inline: true
                },
                {
                    name: `Played By`,
                    value: `<@${data.ctx.user.id}>`,
                    inline: true
                }
            ])
            .setFooter({
                text: `Setar-Bot © ${new Date().getFullYear().toString()}`
            })
            .setImage(data.track.picture)
            .addComponent([
                new MessageButton()
                    .setCustomId('music_info')
                    .setLabel('More...')
                    .setStyle('SECONDARY'),
                
                new MessageButton()
                    .setCustomId('music_stop')
                    .setLabel('Stop')
                    .setEmoji('⏹')
                    .setStyle('SECONDARY'),

                new MessageButton()
                    .setCustomId('music_pp')
                    .setLabel('Pause/Resume')
                    .setEmoji('⏯')
                    .setStyle('SECONDARY'),

                new MessageButton()
                    .setCustomId('music_skip')
                    .setLabel('Skip')
                    .setEmoji('⏭')
                    .setStyle('SECONDARY'),

                new MessageButton()
                    .setCustomId('music_loop')
                    .setLabel('Loop')
                    .setEmoji('🔃')
                    .setStyle('SECONDARY'),

            ])
            : new EmbedBuilder(),
        
        queueUpdate: (): EmbedBuilder => 
            new EmbedBuilder()
                .setAuthor({
                    name: 'Queue Updated'
                })
                .setDescription('Music added to the Queue.')
                .setFooter({
                    text: `Setar-Bot © ${new Date().getFullYear().toString()}`
                }),

        end: (data?: VoiceMetadata, byUser?: boolean): EmbedBuilder =>
            (byUser) ? 
                new EmbedBuilder()
                    .setAuthor({
                        iconURL: 'https://media.discordapp.net/attachments/639120531714473996/721471915398529024/action_032-block-prevent-stop-restrict-512.webp',
                        name: 'Player Destroyed'
                    })
                    .setDescription(`Music player destoryed by <@${data.ctx.user.id}>`)
                    .setFooter({
                        text: `Setar-Bot © ${new Date().getFullYear().toString()}`
                    })

            :
                new EmbedBuilder()
                    .setFooter({
                        text: `Setar-Bot © ${new Date().getFullYear().toString()}`
                    })
                    .setAuthor({
                        iconURL: 'https://media.discordapp.net/attachments/639120531714473996/721471915398529024/action_032-block-prevent-stop-restrict-512.webp',
                        name: `Finished Queue`
                    })
                    .setDescription('😉 See you at the next party.')

            ,
        pause: (): EmbedBuilder => new EmbedBuilder()
        .setDescription('⏸ | Music Paused!')
        .setFooter({
            text: `Setar-Bot © ${new Date().getFullYear().toString()}`
        })
        .setColor(6203346),
        resume: (): EmbedBuilder => new EmbedBuilder()  
        .setDescription('▶️ | Music Resumed!')
        .setFooter({
            text: `Setar-Bot © ${new Date().getFullYear().toString()}`
        })
        .setColor(6203346),
        loop: (mode: "all" | "one" | "none") => new EmbedBuilder()
        .setDescription(mode)
        .setFooter({
            text: `Setar-Bot © ${new Date().getFullYear().toString()}`
        })
        .setColor(6203346),
    },

    info: (client: Client): EmbedBuilder => new EmbedBuilder()
        .setDescription(`${client.user.username} is a multi-language Music Bot in Discord with so many add-on features such as Downlaod and etc.\n\n<:Circle:901117372730052668>  **Bot Information**\n${client.user.username} is a multi-language Music Bot in Discord with so many add-on features such as Downlaod and etc.\n\n<:Circle:901117372730052668> **Developer Information**\n**${client.user.username}-${botOptions.version}** Created by [BoyCode](https://github.com/EhsanFox) in **2022**\nand Originally founded in **2019** by [Setar-Team](https://github.com/SeTar-Bot/)`)
        .setFooter({
            text: `Setar-Bot © ${new Date().getFullYear().toString()}`
        })
        .setAuthor({
            name: client.user.username,
            iconURL: client.user.displayAvatarURL({ dynamic: true }),
            url: botOptions.supportURL
        })
        .setColor(6203346)
        .addComponent([
            new MessageButton()
                .setEmoji(`858816260418568223`)
                .setLabel(`Invite`)
                .setStyle('LINK')
                .setURL(botOptions.inviteURL),

            new MessageButton()
                .setEmoji(`858816253422862347`)
                .setLabel(`Support`)
                .setStyle(`LINK`)
                .setURL(botOptions.supportURL),

            new MessageButton()
                .setEmoji(`858816260418568223`)
                .setLabel(`Website`)
                .setStyle(`LINK`)
                .setURL(botOptions.websiteURL)
        ]),
        
    stats: (client: Client): EmbedBuilder => {
        let userCounts = 0;
        client.guilds.cache.map(g => userCounts += g.memberCount);
        return new EmbedBuilder()
            .setDescription(`**<:store_tag:858816260418568223> | Bot Information** »\n> <:text_channel:900694964462305340> | **${client.guilds.cache.size} Guilds**\n> <:members:900695200320598056> | **${userCounts} Users**\n> <:ping:900695020640817193> | Client-Ping: **${client.ws.ping} ms**`)
            .setFooter({
                text: `Setar-Bot © ${new Date().getFullYear().toString()}`
            })
            .setAuthor({
                name: `${client.user.username} Stats`,
                iconURL: client.user.displayAvatarURL({ dynamic: true })
            })
            .setThumbnail('https://cdn.discordapp.com/attachments/842433957173133352/899251786160951317/server-status1.png');
    },

    invite: (): EmbedBuilder => new EmbedBuilder()
        .setDescription(`**One of The Best Music Bots**\n[Add To Your Server and Enjoy Your Music :)](${botOptions.inviteURL})`)
        .setColor(6203346)
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

    permission: (u: User, role: BotRoles, oldPerm: BotPermissions, newPerm: BotPermissions): EmbedBuilder => new EmbedBuilder()
        .setTitle(`✔ Done`)
        .setDescription((oldPerm !== newPerm) ? `${u.username} has been ${(oldPerm < newPerm) ? '**Promoted**' : '**Demoted**'} to Role **${role}**` : `${u.username} is already **${role}**.`)
        .setFooter({
            text: `Setar-Bot © ${new Date().getFullYear().toString()}`
        })
        .setColor(6203346),

    language: (c: Client, g: Guild): EmbedBuilder => new EmbedBuilder()
        .setTitle(`✔ Done`)
        .setDescription(`${g.name} language changed to **English**\n\nif you want to help ${c.user.username} Support more languages, feel free to join [Support Server](${botOptions.supportURL})`)
        .setColor(6203346)
        .setFooter({
            text: `Setar-Bot © ${new Date().getFullYear().toString()}`
        })
        .addComponent([
            new MessageButton()
                .setLabel(`Support`)
                .setEmoji(`858816253422862347`)
                .setStyle(`LINK`)
                .setURL(botOptions.supportURL)
        ]),

    cache: (c: CacheTypes, r: CacheTypeResult): EmbedBuilder => new EmbedBuilder()
        .setTitle(`✔ Done`)
        .setFooter({
            text: `Setar-Bot © ${new Date().getFullYear().toString()}`
        })
        .setColor(6203346)
        .setDescription((c == CacheTypes.ALL) ? `Total **${r.total}** Objects sweeped out to Trash Can 🚮` : `Caches of \`${c}\` has sweeped out to Trash Can 🚮`),

    eval: (code: string, result: string, isError: boolean, errorStack?: string): EmbedBuilder => new EmbedBuilder()
        .setFooter({
            text: `Setar-Bot © ${new Date().getFullYear().toString()}`
        })
        .setTitle('Extracted Code')
        .setDescription(`\`\`\`${type}\n${code}\n\`\`\``)
        .addEmbeds((isError) ? [
            new EmbedBuilder()
                .setFooter({
                    text: `Setar-Bot © ${new Date().getFullYear().toString()}`
                })
                .setTitle('Evaluation Error')
                .setDescription(`\`\`\`js\n${result}\n\`\`\``),
            
            new EmbedBuilder()
            .setFooter({
                text: `Setar-Bot © ${new Date().getFullYear().toString()}`
            }).
            setTitle(`Error Stack`)
            .setDescription(`\`\`\`js\n${errorStack}\n\`\`\``),
        ] : [
            new EmbedBuilder()
                .setFooter({
                    text: `Setar-Bot © ${new Date().getFullYear().toString()}`
                })
                .setTitle('Evaluated Result')
                .setDescription(`\`\`\`js\n${result}\n\`\`\``),
        ]),

    beta: (): EmbedBuilder => new EmbedBuilder()
        .setTitle('BETA ONLY!')
        .setDescription('Sorry but this command is in beta stage at the moment.')
        
};

export default en_usReplies;
