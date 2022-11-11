import { SlashCommandBuilder } from 'discord.js';
import { Command } from 'src/components/builders';

const commandName = 'info';
const commandDesc = 'Get Information About the Bot and Developers';
export default new Command(
  commandName,
  commandDesc,
  new SlashCommandBuilder().setName(commandName).setDescription(commandDesc),
  true,
  (client, ctx) => {
    ctx.editReply('THIS IS A TEST COMMAND.');
  },
);
