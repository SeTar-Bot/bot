import { Collection, ClientOptions, GuildResolvable, PresenceData } from "discord.js";
import Command from "../src/Classes/Command";
import { BotPermissions, BotRoles, ContextTypes, expreessEndpoints, expressMethods } from "../src/typings/enums";
import { SlashCommandBuilder } from "@discordjs/builders";
import Inhibitor from "../src/Classes/Inhibitor";
import Event from "../src/Classes/Event";
import Client from "../src/Classes/Client";
import Button from "../src/Classes/Button";
import Context from "../src/Classes/Context";
import express from "express";
import Endpoint from "../src/Classes/Endpoint";

export interface botOpts {
    client: ClientOptions;
    commands: string;
    events: string;
    buttons: string;
    contexts: string;
    endpoints: string;
    databaseURI: string;
    inviteURL: string;
    supportURL: string;
    websiteURL: string;
    serverPort: number;
    serverURL: string;
    version: string;
    perms: bigint[];
    readyPresence: (client: Client) => PresenceData;
}

export interface botCommands {

    name: string;
    description: string;
    permission: BotPermissions;
    isAvailable: boolean;
    builder: SlashCommandBuilder;
    guild?: GuildResolvable;
    run: (...any: any) => Promise<any | void>
    inhibitors?: Inhibitor[]

}

export type EventTypes = "discord.js" | "player"; 

export interface botEvents {

    name: string;
    isAvailable: boolean;
    type: EventTypes;
    run: (...any: any) => Promise<any | void>;
    inhibitors?: Inhibitor[]

}

export interface botButtons {
    name: string;
    description: string;
    permission: BotPermissions;
    isAvailable: boolean;
    run: (...any: any) => Promise<any | void>;
}

export interface botContenxts {
    name: string;
    type: ContextTypes;
    isAvailable: boolean;
    permission: BotPermissions;
    run: (...any: any) => Promise<any | void>;
}


export interface botEndpoints {
    uri: expreessEndpoints;
    method: expressMethods;
    isAvailable: boolean;
    testPing: boolean;
    handler: expressCallback;
}

//-----------------

export interface botSetupResult {
    events: number;
    commands: number;
    buttons: number;
    contexts: number;
    endpoints: number;
}

export interface botManager {

    commandFiles: string[];
    contextFiles: string[];
    eventFiles: string[];
    buttonFiles: string[];
    endpointFiles : string[];
    commands: Collection<string, Command>;
    contexts: Collection<string, Context>;
    events: Collection<string, Event>;
    buttons: Collection<string, Button>;
    endpoints: Collection<expreessEndpoints, Endpoint>;
    setup: () => Promise<botSetupResult>;

}

export interface inhibitorArgs {
    client: Client;
    name: string;
    execute: (...any: any) => Promise<boolean>;
}

// ----------
// Database

export interface guildUpdateOpts {
    prefix?: string;
    locale?: string;
    vip?: boolean;
}

export interface userUpdateOpts {
    permission?: BotPermissions;
    role?: BotRoles;
    playlist?: any[];
    vip?: boolean;
}

// -------
export interface CacheTypeResult {
    bans?: number;
    emojis?: number;
    members?: number;
    invites?: number;
    messages?: number;
    presences?: number;
    reactions?: number;
    stages?: number;
    threads?: number;
    users?: number;
    threadMembers?: number;
    voiceStates?: number;
    dbUsers?: any | void;
    dbGuilds?: any | void;
    total?: number;
}

// ------
export interface EmbedBuilderObjOpts {
    fetchReply?: boolean;
    ephemeral?: boolean;
}

export type expressCallback = (client: Client, req: express.Request, res: express.Response) => void;