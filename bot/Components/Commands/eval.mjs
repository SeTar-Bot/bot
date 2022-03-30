import { SlashCommandBuilder, SlashCommandStringOption } from "@discordjs/builders";
import Command from "../../../Classes/Command.mjs";
import { BotPermissions } from "../../../typings/enums.mjs";
const basicInfo = {
  name: 'eval',
  description: 'Eval JavaScript from Gist'
};
const evalCommand = new Command({ ...basicInfo,
  builder: new SlashCommandBuilder().addStringOption(new SlashCommandStringOption().setName('url').setDescription(`Gist/PasteBin URL to Execute`).setRequired(true)).setDescription(basicInfo.description).setName(basicInfo.name),
  isAvailable: false,
  permission: BotPermissions.ADMIN,
  run: async (client, database, ctx) => {
    try {
      const choice = ctx.options.getString('url', true);
      const pasteBinRegex = /http(s)?:\/\/pastebin.com\/([0-9a-zA-Z]+)/g;
      const gistRegex = /http(s)?:\/\/gist.github.com\/([0-9a-zA-Z]+)\/([0-9a-zA-Z]+)/g;
      let GistData = gistRegex.exec(choice),
          PasteBinData = pasteBinRegex.exec(choice);

      if (GistData) {
        const apidata = await client.axiosClient.get(`https://gist.github.com/${GistData[2]}/${GistData[3]}/raw/`);
        if (apidata.status !== 200) await ctx.editReply(client.localeManager.getLocale(database.guild.locale).error.invalidURl(apidata.status).toOBJECT());else {
          let code = apidata.data;
          let evalResult;

          try {
            evalResult = await eval(code);
            await ctx.editReply(client.localeManager.getLocale(database.guild.locale).reply.eval(code, evalResult, false, "js").toOBJECT());
          } catch (error) {
            const e = error;
            await ctx.editReply(client.localeManager.getLocale(database.guild.locale).reply.eval(code, e.message, true, e.stack).toOBJECT());
          }
        }
      } else if (PasteBinData) {
        const apidata = await client.axiosClient.get(`https://pastebin.com/raw/${PasteBinData[2]}`);
        ;
        if (apidata.status !== 200) await ctx.editReply(client.localeManager.getLocale(database.guild.locale).error.invalidURl(apidata.status).toOBJECT());else {
          let code = apidata.data;
          let evalResult;

          try {
            evalResult = await eval(code);
            await ctx.editReply(client.localeManager.getLocale(database.guild.locale).reply.eval(code, evalResult, false).toOBJECT());
          } catch (error) {
            const e = error;
            await ctx.editReply(client.localeManager.getLocale(database.guild.locale).reply.eval(code, e.message, true, error.name).toOBJECT());
          }
        }
        await ctx.editReply('hi');
      } else await ctx.editReply(client.localeManager.getLocale(database.guild.locale).error.invalidURl().toOBJECT());
    } catch (error) {
      throw error;
    }
  }
});
export default evalCommand;