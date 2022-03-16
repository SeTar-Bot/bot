import { MessageButton } from "discord.js";
import { type } from "os";
import botOptions from "../../bot/Config/botOptions.mjs";
import EmbedBuilder from "../../Classes/EmbedBuilder.mjs";
import { CacheTypes } from "../../typings/enums.mjs";
const en_usReplies = {
  info: client => new EmbedBuilder().setDescription(`${client.user.username} is a multi-language Music Bot in Discord with so many add-on features such as Downlaod and etc.\n\n<:Circle:901117372730052668>  **Bot Information**\n${client.user.username} is a multi-language Music Bot in Discord with so many add-on features such as Downlaod and etc.\n\n<:Circle:901117372730052668> **Developer Information**\n**${client.user.username}-${botOptions.version}** Created by [BoyCode](https://github.com/EhsanFox) in **2022**\nand Originally founded in **2019** by [Setar-Team](https://github.com/SeTar-Bot/)`).setFooter({
    text: `Setar-Bot © ${new Date().getFullYear().toString()}`
  }).setAuthor({
    name: client.user.username,
    iconURL: client.user.displayAvatarURL({
      dynamic: true
    }),
    url: botOptions.supportURL
  }).setColor(6203346).addComponent([new MessageButton().setEmoji(`858816260418568223`).setLabel(`Invite`).setStyle('LINK').setURL(botOptions.inviteURL), new MessageButton().setEmoji(`858816253422862347`).setLabel(`Support`).setStyle(`LINK`).setURL(botOptions.supportURL), new MessageButton().setEmoji(`858816260418568223`).setLabel(`Website`).setStyle(`LINK`).setURL(botOptions.websiteURL)]),
  stats: client => {
    let userCounts = 0;
    client.guilds.cache.map(g => userCounts += g.memberCount);
    return new EmbedBuilder().setDescription(`**<:store_tag:858816260418568223> | Bot Information** »\n> <:text_channel:900694964462305340> | **${client.guilds.cache.size} Guilds**\n> <:members:900695200320598056> | **${userCounts} Users**\n> <:ping:900695020640817193> | Client-Ping: **${client.ws.ping} ms**`).setFooter({
      text: `Setar-Bot © ${new Date().getFullYear().toString()}`
    }).setAuthor({
      name: `${client.user.username} Stats`,
      iconURL: client.user.displayAvatarURL({
        dynamic: true
      })
    }).setThumbnail('https://cdn.discordapp.com/attachments/842433957173133352/899251786160951317/server-status1.png');
  },
  invite: () => new EmbedBuilder().setDescription(`**One of The Best Music Bots**\n[Add To Your Server and Enjoy Your Music :)](${botOptions.inviteURL})`).setColor(6203346).setFooter({
    text: `Setar-Bot © ${new Date().getFullYear().toString()}`
  }).addComponent([new MessageButton().setStyle('LINK').setURL(botOptions.inviteURL).setLabel(`Invite`).setEmoji(`858816260418568223`)]),
  permission: (u, role, oldPerm, newPerm) => new EmbedBuilder().setTitle(`✔ Done`).setDescription(oldPerm !== newPerm ? `${u.username} has been ${oldPerm < newPerm ? '**Promoted**' : '**Demoted**'} to Role **${role}**` : `${u.username} is already **${role}**.`).setFooter({
    text: `Setar-Bot © ${new Date().getFullYear().toString()}`
  }).setColor(6203346),
  language: (c, g) => new EmbedBuilder().setTitle(`✔ Done`).setDescription(`${g.name} language changed to **English**\n\nif you want to help ${c.user.username} Support more languages, feel free to join [Support Server](${botOptions.supportURL})`).setColor(6203346).setFooter({
    text: `Setar-Bot © ${new Date().getFullYear().toString()}`
  }).addComponent([new MessageButton().setLabel(`Support`).setEmoji(`858816253422862347`).setStyle(`LINK`).setURL(botOptions.supportURL)]),
  cache: (c, r) => new EmbedBuilder().setTitle(`✔ Done`).setFooter({
    text: `Setar-Bot © ${new Date().getFullYear().toString()}`
  }).setColor(6203346).setDescription(c == CacheTypes.ALL ? `Total **${r.total}** Objects sweeped out to Trash Can 🚮` : `Caches of \`${c}\` has sweeped out to Trash Can 🚮`),
  eval: (code, result, isError, errorStack) => new EmbedBuilder().setFooter({
    text: `Setar-Bot © ${new Date().getFullYear().toString()}`
  }).setTitle('Extracted Code').setDescription(`\`\`\`${type}\n${code}\n\`\`\``).addEmbeds(isError ? [new EmbedBuilder().setFooter({
    text: `Setar-Bot © ${new Date().getFullYear().toString()}`
  }).setTitle('Evaluation Error').setDescription(`\`\`\`js\n${result}\n\`\`\``), new EmbedBuilder().setFooter({
    text: `Setar-Bot © ${new Date().getFullYear().toString()}`
  }).setTitle(`Error Stack`).setDescription(`\`\`\`js\n${errorStack}\n\`\`\``)] : [new EmbedBuilder().setFooter({
    text: `Setar-Bot © ${new Date().getFullYear().toString()}`
  }).setTitle('Evaluated Result').setDescription(`\`\`\`js\n${result}\n\`\`\``)]),
  beta: () => new EmbedBuilder().setTitle('BETA ONLY!').setDescription('Sorry but this command is in beta stage at the moment.')
};
export default en_usReplies;