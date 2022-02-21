import { SlashCommandBuilder, SlashCommandStringOption } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";
import { dbObject } from "../../../../types/database";
import Client from "../../../Classes/Client";
import Command from "../../../Classes/Command";
import { BotPermissions, localeList } from "../../../typings/enums";
import * as ts from "typescript";

const basicInfo = {
    name: 'eval',
    description: 'Eval JavaScript from Gist'
}

const evalCommand: Command = new Command({
    ...basicInfo,
    builder: new SlashCommandBuilder()
        .addStringOption(
            new SlashCommandStringOption()
                .setName('url')
                .setDescription(`Gist/PasteBin URL to Execute`)
                .setRequired(true)
        )
        .setDescription(basicInfo.description)
        .setName(basicInfo.name),
    isAvailable: false,
    permission: BotPermissions.ADMIN,
    run: async (client: Client, database: dbObject, ctx: CommandInteraction) => {
        try {
            const choice = ctx.options.getString('url', true);
            const pasteBinRegex = /http(s)?:\/\/pastebin.com\/([0-9a-zA-Z]+)/g;
            const gistRegex = /http(s)?:\/\/gist.github.com\/([0-9a-zA-Z]+)\/([0-9a-zA-Z]+)/g;
            let GistData = gistRegex.exec(choice),
                PasteBinData = pasteBinRegex.exec(choice);

            if(GistData)
            {
                const apidata = await client.axiosClient.get(`https://gist.github.com/${GistData[2]}/${GistData[3]}/raw/`);
                if(apidata.status !== 200)
                    await ctx.editReply(client.localeManager.getLocale(database.guild.locale as localeList).error.invalidURl(apidata.status).toOBJECT());
                else
                {
                    let code = apidata.data;
                    let evalResult: string;
                    try {
                        evalResult = await eval(code);
                        await ctx.editReply(client.localeManager.getLocale(database.guild.locale as localeList).reply.eval(code, evalResult, false, "js").toOBJECT())
                    } catch (error) {
                        const e: Error = error;
                        await ctx.editReply(client.localeManager.getLocale(database.guild.locale as localeList).reply.eval(code, e.message, true, e.stack).toOBJECT())
                    }

                }
            }
            else if(PasteBinData)
            {
                console.log(PasteBinData);
                const apidata = await client.axiosClient.get(`https://pastebin.com/raw/${PasteBinData[2]}`);;
                if(apidata.status !== 200)
                    await ctx.editReply(client.localeManager.getLocale(database.guild.locale as localeList).error.invalidURl(apidata.status).toOBJECT());
                else
                {
                    let code = apidata.data;
                    let evalResult: string;
                    try {
                        evalResult = await eval(code);
                        await ctx.editReply(client.localeManager.getLocale(database.guild.locale as localeList).reply.eval(code, evalResult, false).toOBJECT())
                    } catch (error) {
                        const e: Error = error;
                        await ctx.editReply(client.localeManager.getLocale(database.guild.locale as localeList).reply.eval(code, e.message, true, error.name).toOBJECT())
                    }
                }
                await ctx.editReply('hi');
            }
            else
                await ctx.editReply(client.localeManager.getLocale(database.guild.locale as localeList).error.invalidURl().toOBJECT())

        } catch (error) {
            throw error;
        }
    }
})

export default evalCommand;