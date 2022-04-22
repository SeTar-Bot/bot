import { SlashCommandBuilder } from "@discordjs/builders";
import { GuildResolvable } from "discord.js";
import { botCommands, botCommandsArgs } from "../../types/classes";
import { BotPermissions } from "../typings/enums";
import Inhibitor from "./Inhibitor";

export default class Command implements botCommands {

    public name: string;
    public description: string;
    public permission: BotPermissions;
    public isAvailable: boolean;
    public guild?: GuildResolvable;
    readonly inhibitors?: Inhibitor[];
    readonly builder: SlashCommandBuilder;

    private hasInhibitors = false;
    private executer: (...any: any) => Promise<any | void>;
    constructor(setupArgs: botCommandsArgs)
    {
        this.name = setupArgs.name;
        this.description = setupArgs.description;
        this.permission = setupArgs.permission;
        this.isAvailable = setupArgs.isAvailable;
        this.builder = setupArgs.builder;

        if(setupArgs.inhibitors && setupArgs.inhibitors.length > 0)
        {
            this.inhibitors = setupArgs.inhibitors,
            this.hasInhibitors = true;
        }
        this.executer = setupArgs.run;
    }

    public async run(...any: any): Promise<any> {
        if(this.hasInhibitors && this.inhibitors)
        {
            for (const inhibitor of this.inhibitors)
            {
                try {
                    const bool = await inhibitor.execute(...any);
                    if(!bool)
                        throw new Error(`Inhibitor ${inhibitor.name} didn't passed it.`);
                } catch (error) {
                    throw new Error(`Inhibitor ${inhibitor.name} has been failed due Error: ${error}`);
                } 
            }

            return await this.executer(...any)
        }
        else
            return await this.executer(...any)
    }
}