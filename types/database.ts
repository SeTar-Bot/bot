import { GuildResolvable, UserResolvable } from "discord.js";

export interface dbGuildSchema {
    id: GuildResolvable;
    prefix: string;
    locale: string;
    vip: boolean;
} 

export interface dbUserSchema {
    id: UserResolvable;
    permission: number;
    role: string;
    playlist: any[];
    vip: boolean;
}

export interface dbObject {
    guild: dbGuildSchema
    user: dbUserSchema
}