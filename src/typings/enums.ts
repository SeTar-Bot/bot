export enum BotPermissions {
    BAN = 0,
    ALL = 1,
    SUPPORT = 2,
    ADMIN = 3
};

export enum BotRoles {
    BAN = "banned",
    ALL = "user",
    SUPPORT = "support",
    ADMIN = "admin"
}

export enum CacheTypes {

    ALL = "all",
    BAN = "ban",
    EMOJI = "emoji",
    MEMBER = "guildMember",
    INVITE = "invite",
    MESSAGE = "message",
    PRESENCE = "presence",
    REACTION = "reaction",
    STAGE = "stages",
    THREAD = "thread",
    THREAD_MEMBER = "threadMember",
    USERS = "users",
    VOICESTATES = "voiceStates",

    DB_GUILDS = "dbGuilds",
    DB_USERS = "dbUsers",

}

export enum ContextTypes {
    USER = 2,
    MESSAGE = 3
};

export enum localeList {

    ENGLISH = "en-us",

}