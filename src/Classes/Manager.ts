import { ApplicationCommandManager, Collection } from "discord.js";
import { botManager, botSetupResult, EventTypes } from "../../types/classes";
import Command from "./Command";
import fs from "fs";
import path from "path";
import Client from "./Client";
import Event from "./Event";
import ora from "ora";
import chalk from "chalk";
import Button from "./Button";
import { SlashCommandBuilder } from "@discordjs/builders";
import Context from "./Context";
import { expreessEndpoints } from "../typings/enums";
import Endpoint from "./Endpoint";
import express from "express";
import botOptions from "../bot/Config/botOptions";
import EventEmitter from "events";

export default class Manager implements botManager {
    readonly commandFiles: string[];
    readonly contextFiles: string[];
    readonly eventFiles: string[];
    readonly buttonFiles: string[];
    readonly endpointFiles: string[];
    readonly events: Collection<string, Event> = new Collection();
    readonly commands: Collection<string, Command> = new Collection();
    readonly contexts: Collection<string, Context> = new Collection(); 
    readonly buttons: Collection<string, Button> = new Collection();
    readonly endpoints: Collection<expreessEndpoints, Endpoint> = new Collection();
    private cmdDir: string;
    private ctxDir: string;
    private eventDir: string;
    private buttonDir: string;
    private endpointtDir: string;
    private client: Client;
    private applicationClient: ApplicationCommandManager;

    constructor(client: Client, cmdDir: string, eventDir: string, buttonDir: string, contextDir: string, endpointDir: string)
    {
        if (!fs.existsSync(cmdDir) || !fs.existsSync(eventDir) || !fs.existsSync(buttonDir) || !fs.existsSync(contextDir) || !fs.existsSync(endpointDir))
            throw new Error(`Directions does not exist. | Recived: ${cmdDir} | ${eventDir} | ${buttonDir} | ${contextDir} | ${endpointDir}`);

        this.client = client;
        this.cmdDir = cmdDir;
        this.ctxDir = contextDir
        this.eventDir = eventDir;
        this.buttonDir = buttonDir;
        this.endpointtDir = endpointDir;
        this.commandFiles = fs.readdirSync(cmdDir);
        this.contextFiles = fs.readdirSync(contextDir)
        this.eventFiles = fs.readdirSync(eventDir);
        this.buttonFiles = fs.readdirSync(buttonDir);
        this.endpointFiles = fs.readdirSync(endpointDir);
        this.applicationClient = client.application.commands;
    }

    async setup(): Promise<botSetupResult> {
        try {
            const registedCmds = await this.applicationClient.fetch();
            const restBuilder = [];
            // Events
            const eventLoading = ora({
                text: `Loading ${chalk.blue(`Events`)}`,
                color: "yellow",
                spinner: "bluePulse",
            }).start();

            for (let i = 0; i < this.eventFiles.length; i++) {
                const eventFile = this.eventFiles[i];
                try {
                    const importState = await import(`file://${path.resolve(this.eventDir, eventFile)}`);
                    const event: Event = importState.default;
                    this.events.set(event.name, event);
                    if(event.isAvailable && event.type == "discord.js")
                        this.client.on(event.name, (...args: any) => event.run(this.client, ...args));
                } catch (error) {
                    eventLoading.fail(`Event ${eventFile} Failed to load Due Error: ${error}`);
                }
            }

            eventLoading.succeed( `${chalk.bgGray(this.eventFiles.length)} Events has been loaded.`);

            // Commands
            const cmdLoading = ora({
                text: `Loading ${chalk.blue(`Commands`)}`,
                color: "yellow",
                spinner: "bluePulse",
            }).start();


            for (let i = 0; i < this.commandFiles.length; i++) {
                const cmdFile = this.commandFiles[i]
                try {
                    const importState = await import(`file://${path.resolve(this.cmdDir, cmdFile)}`);
                    const command: Command = importState.default;          
                    this.commands.set(command.name, command);
                    if(!command.guild && command.isAvailable)
                        restBuilder.push(command.builder.toJSON());
                    else    
                        await this.client.restClient.updateCommand(this.client.application.commands, command.guild, command.builder.toJSON());
                } catch (error) {
                    cmdLoading.fail(`Command ${cmdFile} Failed to load Due Error: ${error}`);
                }
            }
            await this.client.restClient.addCommand(restBuilder);
            cmdLoading.succeed(`${chalk.bgGray(this.commandFiles.length)} Commands has been loaded.`);

            // Contexts
            const ctxLoading = ora({
                text: `Loading ${chalk.blue(`Contexts`)}`,
                color: "yellow",
                spinner: "bluePulse",
            }).start();


            for (let i = 0; i < this.contextFiles.length; i++) {
                const ctxFile = this.contextFiles[i]
                try {
                    const importState = await import(`file://${path.resolve(this.ctxDir, ctxFile)}`);
                    const context: Context = importState.default;          
                    this.contexts.set(context.name, context);
                    if(context.isAvailable)
                        restBuilder.push({ name: context.name, type: context.type });
                } catch (error) {
                    ctxLoading.fail(`Contexts ${ctxFile} Failed to load Due Error: ${error}`);
                }
            }
            await this.client.restClient.addCommand(restBuilder);
            ctxLoading.succeed(`${chalk.bgGray(this.contextFiles.length)} Contexts has been loaded.`);

            // Buttons
            const buttonLoading = ora({
                text: `Loading ${chalk.blue(`Buttons`)}`,
                color: "yellow",
                spinner: "bluePulse",
            }).start();

            for (let i = 0; i < this.buttonFiles.length; i++) {
                const btnFile = this.buttonFiles[i]

                try {
                    const importState = await import(`file://${path.resolve(this.buttonDir, btnFile)}`);
                    const button: Button = importState.default;
                    this.buttons.set(button.name, button);
                } catch (error) {
                    buttonLoading.fail(`Button ${btnFile} Failed to load Due Error: ${error}`);
                }
            }
        
            buttonLoading.succeed(`${chalk.bgGray(this.buttonFiles.length)} Buttons has been loaded.`);

            // Endpoints
            const endpointLoading = ora({
                text: `Loading ${chalk.blue(`Endpoints`)}`,
                color: "yellow",
                spinner: "bluePulse",
            });
            for (let i = 0; i < this.endpointFiles.length; i++) {
                const endpFile = this.endpointFiles[i]

                try {
                    const importState = await import(`file://${path.resolve(this.endpointtDir, endpFile)}`);
                    const endpoint: Endpoint = importState.default;
                    if(endpoint.isAvailable)
                    {
                        this.endpoints.set(endpoint.uri, endpoint);
                        this.client.expressServer.server[endpoint.method](endpoint.uri, (req: express.Request, res: express.Response) => {
                            endpoint.handler(this.client, req, res);
                        });
                        if(endpoint.testPing)
                        {
                            const testPingReesult = await this.client.axiosClient[endpoint.method](botOptions.serverURL + endpoint.uri);
                            if(testPingReesult.status !== 200)
                                console.error(new Error(`[Endpoint ${endpFile}]: Test ping failed due: ${testPingReesult.statusText}`));
                        }
                    }
                } catch (error) {
                    endpointLoading.fail(`Endpoint ${endpFile} Failed to load Due Error: ${error}`);
                }
            }

            endpointLoading.succeed(`${chalk.bgGray(this.endpointFiles.length)} Endpoints has been loaded.`);

            return {
                events: this.events.size,
                commands: this.commands.size,
                buttons: this.buttons.size,
                contexts: this.contexts.size,
                endpoints: this.endpoints.size
            } as botSetupResult;
            
        } catch (err) {
            throw err;
        }
    }

    loadEvent(name: string, type: EventTypes, emitter: EventEmitter): boolean
    {
        const searchFilter = this.events.filter(e => e.type == type);
        console.log(`filter: `, searchFilter);
        if(name !== "all")
        {
            const searchResult = searchFilter.find(e => e.name == name);
            console.log(`result: `, searchResult);
            if(!searchResult)
                return false;

            emitter.on(name, (...args) => searchResult.run(...args));
            return true;
        }
        else
        {
            searchFilter.forEach(e => {
                emitter.on(e.name, (...args) => e.run(...args));
            });
            console.log(`✔ | ${searchFilter.size} Events has been Loaded for Custom Emitter.`);
            return true;
        }
    }
}