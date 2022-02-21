import { Collection, ClientOptions, GuildResolvable, Permissions, PresenceData } from "discord.js";
import Command from "../src/Classes/Command";
import { BotPermissions, BotRoles, ContextTypes } from "../src/typings/enums";
import { SlashCommandBuilder } from "@discordjs/builders";
import Inhibitor from "../src/Classes/Inhibitor";
import Event from "../src/Classes/Event";
import Client from "../src/Classes/Client";
import Button from "../src/Classes/Button";
import Context from "../src/Classes/Context";

export interface botOpts {
    client: ClientOptions;
    commands: string;
    events: string;
    buttons: string;
    contexts: string;
    databaseURI: string;
    inviteURL: string;
    supportURL: string;
    websiteURL: string;
    version: string;
    perms: bigint[];
    readyPresence: (client: Client) => PresenceData;
};

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
export interface botCommandsArgs extends botCommands {}

export interface botEvents {

    name: string;
    isAvailable: boolean;
    run: (...any: any) => Promise<any | void>
    inhibitors?: Inhibitor[]

}
export interface botEventsArgs extends botEvents {}

export interface botButtons {
    name: string;
    description: string;
    permission: BotPermissions;
    isAvailable: boolean;
    run: (...any: any) => Promise<any | void>;
}
export interface botButtonsArgs extends botButtons {}

export interface botContenxts {
    name: string;
    type: ContextTypes;
    isAvailable: boolean;
    permission: BotPermissions;
    run: (...any: any) => Promise<any | void>;
}
export interface botContextArgs extends botContenxts {}

//-----------------

export interface botSetupResult {
    events: number;
    commands: number;
    buttons: number;
}

export interface botManager {

    commandFiles: string[];
    contextFiles: string[];
    eventFiles: string[];
    buttonFiles: string[];
    commands: Collection<string, Command>;
    contexts: Collection<string, Context>;
    events: Collection<string, Event>;
    buttons: Collection<string, Button>;
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