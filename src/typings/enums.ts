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

export enum expreessEndpoints {

    LIVE = "/live",
    
}

export enum expressMethods {
    GET = "get",
    POST = "post",
    PUT = "put",
    PATCH = "patch",
    
}

export enum PlayerEvents {
    CONNECT = "connect",
    DISCONNECT = "disconnect",
    END = "finish",
    ERROR = "error",
    TRACK = "track"
}