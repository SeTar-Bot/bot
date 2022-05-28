import chalk from "chalk";
import { CommandInteraction, Interaction } from "discord.js";
import { dbGuildSchema, dbObject, dbUserSchema } from "../../../types/database";
import Client from "../../Classes/Client";
import Event from "../../Classes/Event";
import { BotPermissions, ContextTypes, localeList } from "../../typings/enums";

const InteractionEvent = new Event({
    name: 'interactionCreate',
    isAvailable: true,
    type: "discord.js",
    run: async (client: Client, interaction: Interaction): Promise<void> => {

        // Wait for Database
        const intc: CommandInteraction = interaction as CommandInteraction;

        if(!interaction.isButton())
            await intc.deferReply();

        try {
            
            const gData: dbGuildSchema = await client.database.guilds.fetch(interaction.guild) as dbGuildSchema;
            const uData: dbUserSchema = await client.database.users.fetch(interaction.user) as dbUserSchema;
            
            const databaseFetchedObj: dbObject = {
                guild: gData as dbGuildSchema,
                user: uData as dbUserSchema
            };

            if(uData.permission == BotPermissions.BAN)
                await intc.editReply(client.localeManager.getLocale(databaseFetchedObj.guild.locale as localeList).error.missingPerm(uData.permission).toOBJECT({ ephemeral: true }));

            if(interaction.isCommand())
            {
                const command = client.manager.commands.get(interaction.commandName);
                if(command && command.isAvailable && command.permission <= uData.permission)
                    try {
                        await command.run(client, databaseFetchedObj, interaction)
                    } catch (e) {
                        const error: Error = e;
                        await intc.editReply(client.localeManager.getLocale(databaseFetchedObj.guild.locale as localeList).error.internal().toOBJECT({ ephemeral: true }))
                        console.error(`${chalk.bgRed(`----- ERROR -----`)}\nError Location: Events/Interaction.djs -> Commands/${command.name}\nName: ${error.name}\nError: ${error.message}\nStack: ${error.stack}\n${chalk.bgRed(`----- ERROR -----`)}`)
                    }

                else if(command.permission !== uData.permission)
                    await interaction.editReply(client.localeManager.getLocale(databaseFetchedObj.guild.locale as localeList).error.missingPerm(uData.permission).toOBJECT({ ephemeral: true }))
                else
                    await interaction.editReply(client.localeManager.getLocale(databaseFetchedObj.guild.locale as localeList).error.noContent().toOBJECT({ ephemeral: true }));
            }
            else if(interaction.isButton())
            {
                const button = client.manager.buttons.get(interaction.customId);
                if(button && button.isAvailable && button.permission <= uData.permission)
                    try {
                        await button.run(client, databaseFetchedObj, interaction);
                    } catch (error) {
                        await intc.deferReply()
                        await intc.editReply(client.localeManager.getLocale(databaseFetchedObj.guild.locale as localeList).error.internal().toOBJECT({ ephemeral: true }))
                        console.error(`${chalk.bgRed(`----- ERROR -----`)}\nError Location: Events/Interaction.djs -> Buttons/${button.name}\nError: ${error}\n${chalk.bgRed(`----- ERROR -----`)}`)
                    }
                else if(button.permission > uData.permission)
                {
                    await intc.deferReply()
                    await interaction.editReply(client.localeManager.getLocale(databaseFetchedObj.guild.locale as localeList).error.missingPerm(uData.permission).toOBJECT({ ephemeral: true }))    
                }
                else
                {
                    await intc.deferReply()
                    await interaction.editReply(client.localeManager.getLocale(databaseFetchedObj.guild.locale as localeList).error.noContent().toOBJECT({ ephemeral: true }));
                }
            }
            else if(interaction.isUserContextMenu())
            {
                const userContexts = client.manager.contexts.filter(x => x.type == ContextTypes.USER);
                const context = userContexts.get(interaction.commandName);
                if(context && context.isAvailable && context.permission <= uData.permission)
                    try {
                        await context.run(client, databaseFetchedObj, interaction);
                    } catch (error) {
                        await intc.editReply(client.localeManager.getLocale(databaseFetchedObj.guild.locale as localeList).error.internal().toOBJECT({ ephemeral: true }))
                        console.error(`${chalk.bgRed(`----- ERROR -----`)}\nError Location: Events/Interaction.djs -> Contexts/${context.name}\nError: ${error}\n${chalk.bgRed(`----- ERROR -----`)}`)
                    }
                else if(context.permission !== uData.permission)
                    await interaction.editReply(client.localeManager.getLocale(databaseFetchedObj.guild.locale as localeList).error.missingPerm(uData.permission).toOBJECT({ ephemeral: true }))
                else
                    await interaction.editReply(client.localeManager.getLocale(databaseFetchedObj.guild.locale as localeList).error.noContent().toOBJECT({ ephemeral: true }));
            }
            else if(interaction.isMessageContextMenu())
            {
                const msgContexts = client.manager.contexts.filter(x => x.type == ContextTypes.MESSAGE);
                const context = msgContexts.get(interaction.commandName);
                if(context && context.isAvailable && context.permission <= uData.permission)
                    try {
                        await context.run(client, databaseFetchedObj, interaction);
                    } catch (error) {
                        await intc.editReply(client.localeManager.getLocale(databaseFetchedObj.guild.locale as localeList).error.internal().toOBJECT({ ephemeral: true }))
                        console.error(`${chalk.bgRed(`----- ERROR -----`)}\nError Location: Events/Interaction.djs -> Contexts/${context.name}\nError: ${error}\n${chalk.bgRed(`----- ERROR -----`)}`)
                    }
                
                else if(context.permission !== uData.permission)
                    await interaction.editReply(client.localeManager.getLocale(databaseFetchedObj.guild.locale as localeList).error.missingPerm(uData.permission).toOBJECT({ ephemeral: true }))
                else
                    await interaction.editReply(client.localeManager.getLocale(databaseFetchedObj.guild.locale as localeList).error.noContent().toOBJECT({ ephemeral: true }));
            }
        } catch (e) {
            await intc.deferReply();
            const error: Error = e;
            await intc.editReply(client.localeManager.getLocale(localeList.ENGLISH).error.internal().toOBJECT({ ephemeral: true }));
            console.error(`${chalk.bgRed(`----- ERROR -----`)}\nError Location: Events/Interaction.djs\nError: ${error.message}\nStack: ${error.stack}\n${chalk.bgRed(`----- ERROR -----`)}`)
        }  
    }
})

export default InteractionEvent;