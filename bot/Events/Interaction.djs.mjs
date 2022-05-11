import chalk from "chalk";
import Event from "../../Classes/Event.mjs";
import { BotPermissions, ContextTypes, localeList } from "../../typings/enums.mjs";
const InteractionEvent = new Event({
  name: 'interactionCreate',
  isAvailable: true,
  type: "discord.js",
  run: async (client, interaction) => {
    // Wait for Database
    const intc = interaction;
    await intc.deferReply();

    try {
      const gData = await client.database.guilds.fetch(interaction.guild);
      const uData = await client.database.users.fetch(interaction.user);
      const databaseFetchedObj = {
        guild: gData,
        user: uData
      };
      if (uData.permission == BotPermissions.BAN) await intc.editReply(client.localeManager.getLocale(databaseFetchedObj.guild.locale).error.missingPerm(uData.permission).toOBJECT({
        ephemeral: true
      }));

      if (interaction.isCommand()) {
        const command = client.manager.commands.get(interaction.commandName);
        if (command && command.isAvailable && command.permission <= uData.permission) try {
          await command.run(client, databaseFetchedObj, interaction);
        } catch (error) {
          await intc.editReply(client.localeManager.getLocale(databaseFetchedObj.guild.locale).error.internal().toOBJECT({
            ephemeral: true
          }));
          console.error(`${chalk.bgRed(`----- ERROR -----`)}\nError Location: Events/Interaction.djs -> Commands/${command.name}\nError: ${error}\n${chalk.bgRed(`----- ERROR -----`)}`);
        } else if (command.permission !== uData.permission) await interaction.editReply(client.localeManager.getLocale(databaseFetchedObj.guild.locale).error.missingPerm(uData.permission).toOBJECT({
          ephemeral: true
        }));else await interaction.editReply(client.localeManager.getLocale(databaseFetchedObj.guild.locale).error.noContent().toOBJECT({
          ephemeral: true
        }));
      } else if (interaction.isButton()) {
        const button = client.manager.buttons.get(interaction.customId);
        if (button && button.isAvailable && button.permission <= uData.permission) try {
          await button.run(client, databaseFetchedObj, interaction);
        } catch (error) {
          await intc.editReply(client.localeManager.getLocale(databaseFetchedObj.guild.locale).error.internal().toOBJECT({
            ephemeral: true
          }));
          console.error(`${chalk.bgRed(`----- ERROR -----`)}\nError Location: Events/Interaction.djs -> Buttons/${button.name}\nError: ${error}\n${chalk.bgRed(`----- ERROR -----`)}`);
        } else if (button.permission !== uData.permission) await interaction.editReply(client.localeManager.getLocale(databaseFetchedObj.guild.locale).error.missingPerm(uData.permission).toOBJECT({
          ephemeral: true
        }));else await interaction.editReply(client.localeManager.getLocale(databaseFetchedObj.guild.locale).error.noContent().toOBJECT({
          ephemeral: true
        }));
      } else if (interaction.isUserContextMenu()) {
        const userContexts = client.manager.contexts.filter(x => x.type == ContextTypes.USER);
        const context = userContexts.get(interaction.commandName);
        if (context && context.isAvailable && context.permission <= uData.permission) try {
          await context.run(client, databaseFetchedObj, interaction);
        } catch (error) {
          await intc.editReply(client.localeManager.getLocale(databaseFetchedObj.guild.locale).error.internal().toOBJECT({
            ephemeral: true
          }));
          console.error(`${chalk.bgRed(`----- ERROR -----`)}\nError Location: Events/Interaction.djs -> Contexts/${context.name}\nError: ${error}\n${chalk.bgRed(`----- ERROR -----`)}`);
        } else if (context.permission !== uData.permission) await interaction.editReply(client.localeManager.getLocale(databaseFetchedObj.guild.locale).error.missingPerm(uData.permission).toOBJECT({
          ephemeral: true
        }));else await interaction.editReply(client.localeManager.getLocale(databaseFetchedObj.guild.locale).error.noContent().toOBJECT({
          ephemeral: true
        }));
      } else if (interaction.isMessageContextMenu()) {
        const msgContexts = client.manager.contexts.filter(x => x.type == ContextTypes.MESSAGE);
        const context = msgContexts.get(interaction.commandName);
        if (context && context.isAvailable && context.permission <= uData.permission) try {
          await context.run(client, databaseFetchedObj, interaction);
        } catch (error) {
          await intc.editReply(client.localeManager.getLocale(databaseFetchedObj.guild.locale).error.internal().toOBJECT({
            ephemeral: true
          }));
          console.error(`${chalk.bgRed(`----- ERROR -----`)}\nError Location: Events/Interaction.djs -> Contexts/${context.name}\nError: ${error}\n${chalk.bgRed(`----- ERROR -----`)}`);
        } else if (context.permission !== uData.permission) await interaction.editReply(client.localeManager.getLocale(databaseFetchedObj.guild.locale).error.missingPerm(uData.permission).toOBJECT({
          ephemeral: true
        }));else await interaction.editReply(client.localeManager.getLocale(databaseFetchedObj.guild.locale).error.noContent().toOBJECT({
          ephemeral: true
        }));
      }
    } catch (e) {
      const error = e;
      await intc.editReply(client.localeManager.getLocale(localeList.ENGLISH).error.internal().toOBJECT({
        ephemeral: true
      }));
      console.error(`${chalk.bgRed(`----- ERROR -----`)}\nError Location: Events/Interaction.djs\nError: ${error.message}\nStack: ${error.stack}\n${chalk.bgRed(`----- ERROR -----`)}`);
    }
  }
});
export default InteractionEvent;