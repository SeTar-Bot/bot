import { User, PermissionResolvable, Guild } from "discord.js";
import Client from "../src/Classes/Client";
import EmbedBuilder from "../src/Classes/EmbedBuilder";
import { BotPermissions, BotRoles, CacheTypes, localeList } from "../src/typings/enums";
import { CacheTypeResult } from "./classes";

export interface localeReplies {
    info: (client: Client) => EmbedBuilder;
    stats: (client: Client) => EmbedBuilder;
    invite: () => EmbedBuilder;
    permission: (u: User, role: BotRoles, oldPerm: BotPermissions, newPerm: BotPermissions) => EmbedBuilder;
    language: (c: Client, g: Guild) => EmbedBuilder;
    cache: (c: CacheTypes, r: CacheTypeResult) => EmbedBuilder;
    eval: (code: string, result: string, isError: boolean, errorStack?: string) => EmbedBuilder;
}

export interface localeErrors {

    permission: () => EmbedBuilder;
    internal: () => EmbedBuilder;
    noContent: () => EmbedBuilder;
    missingPerm: (userPerm: BotPermissions) => EmbedBuilder;
    missingPerms: (perms: PermissionResolvable) => EmbedBuilder;
    invalidURl: (statusCode?: number) => EmbedBuilder;
}

export interface localeBase {

    reply: localeReplies;
    error: localeErrors;
}