import { MessageButton } from "discord.js";
import botOptions from "../../bot/Config/botOptions.mjs";
import EmbedBuilder from "../../Classes/EmbedBuilder.mjs";
import { BotPermissions } from "../../typings/enums.mjs";
const en_usErrors = {
  permission: () => new EmbedBuilder().setTitle(`❌ Ooopsie...`).setDescription(`Sorry but looks like i have a missiong permission on this server,\nPlease try again and invite me with the Button below!`).setFooter({
    text: `Setar-Bot © ${new Date().getFullYear().toString()}`
  }).addComponent([new MessageButton().setStyle('LINK').setURL(botOptions.inviteURL).setLabel(`Invite`).setEmoji(`858816260418568223`)]),
  internal: () => new EmbedBuilder().setTitle(`❌ Ooopsie...`).setDescription(`**[500]** Internal Server error has accured\nError will be reported to Developers.`).setFooter({
    text: `Setar-Bot © ${new Date().getFullYear().toString()}`
  }).addComponent([new MessageButton().setStyle(`LINK`).setURL(botOptions.supportURL).setLabel(`Support`).setEmoji(`858816253422862347`)]),
  noContent: () => new EmbedBuilder().setTitle(`❌ Ooopsie...`).setDescription(`**[204]** There is no content for this command or the command has been disabled.`).setFooter({
    text: `Setar-Bot © ${new Date().getFullYear().toString()}`
  }).addComponent([new MessageButton().setStyle(`LINK`).setURL(botOptions.supportURL).setLabel(`Support`).setEmoji(`858816253422862347`)]),
  missingPerm: userPerm => new EmbedBuilder().setTitle(`❌ Ooopsie...`).setDescription(userPerm == BotPermissions.BAN ? `Looks like you have been banned from Using the Bot\nYou can feel free to ask about supports for more information.` : `Looks like this command requires more permission than you have`).setFooter({
    text: `Setar-Bot © ${new Date().getFullYear().toString()}`
  }).addComponent([new MessageButton().setStyle(`LINK`).setURL(botOptions.supportURL).setLabel(`Support`).setEmoji(`858816253422862347`)]),
  missingPerms: perms => new EmbedBuilder().setTitle(`❌ Ooopsie...`).setDescription(`Sorry, this command required some specific Permissions to be executed`).setFooter({
    text: `Setar-Bot © ${new Date().getFullYear().toString()}`
  }).setFields([{
    inline: false,
    name: 'Specified Permissions',
    value: perms.toString()
  }]),
  invalidURl: statusCode => new EmbedBuilder().setTitle(`❌ Ooopsie...`).setDescription(statusCode !== 200 ? `Sorry, but the URl is invalid, Supported URL's are only Github Gist and Pastebin.` : `Sorry, Request has been failed with Error code of \`${statusCode}\``).setFooter({
    text: `Setar-Bot © ${new Date().getFullYear().toString()}`
  })
};
export default en_usErrors;