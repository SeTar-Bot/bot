import { SlashCommandBuilder, SlashCommandStringOption } from "@discordjs/builders";
import Command from "../../../Classes/Command.mjs";
import { BotPermissions } from "../../../typings/enums.mjs";
const basicInfo = {
  name: 'play',
  description: 'Play some music for your self (BETA VERSION)'
};
const playCommand = new Command({ ...basicInfo,
  builder: new SlashCommandBuilder().addStringOption(new SlashCommandStringOption().setName("input").setDescription("Give me a URL or text to search for").setRequired(true)).addStringOption(new SlashCommandStringOption().setName("engine").setDescription("What platform you want us to search for music").setRequired(false).addChoices([['YouTube', "YouTube"], ["Spotify", "Spotify"], ["SoundCloud", "SoundCloud"], ["Deezer", "Deezer"]])).setDescription(basicInfo.description).setName(basicInfo.name),
  isAvailable: true,
  permission: BotPermissions.ALL,
  run: async (client, database, ctx) => {
    try {
      const input = ctx.options.getString('input', true);
      const engineChoice = ctx.options.getString('engine', false);
      const player = client.playerClient.createPlayer(ctx.guild, {
        engine: engineChoice ?? 'youtube',
        leaveOnEnd: true,
        selfDeaf: true,
        selfMute: false
      });
      console.log(await player.search(input));
      await ctx.editReply(client.localeManager.getLocale(database.guild.locale).reply.beta().toOBJECT());
    } catch (error) {
      throw error;
    }
  }
});
export default playCommand;