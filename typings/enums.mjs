export let BotPermissions;

(function (BotPermissions) {
  BotPermissions[BotPermissions["BAN"] = 0] = "BAN";
  BotPermissions[BotPermissions["ALL"] = 1] = "ALL";
  BotPermissions[BotPermissions["SUPPORT"] = 2] = "SUPPORT";
  BotPermissions[BotPermissions["ADMIN"] = 3] = "ADMIN";
})(BotPermissions || (BotPermissions = {}));

;
export let BotRoles;

(function (BotRoles) {
  BotRoles["BAN"] = "banned";
  BotRoles["ALL"] = "user";
  BotRoles["SUPPORT"] = "support";
  BotRoles["ADMIN"] = "admin";
})(BotRoles || (BotRoles = {}));

export let CacheTypes;

(function (CacheTypes) {
  CacheTypes["ALL"] = "all";
  CacheTypes["BAN"] = "ban";
  CacheTypes["EMOJI"] = "emoji";
  CacheTypes["MEMBER"] = "guildMember";
  CacheTypes["INVITE"] = "invite";
  CacheTypes["MESSAGE"] = "message";
  CacheTypes["PRESENCE"] = "presence";
  CacheTypes["REACTION"] = "reaction";
  CacheTypes["STAGE"] = "stages";
  CacheTypes["THREAD"] = "thread";
  CacheTypes["THREAD_MEMBER"] = "threadMember";
  CacheTypes["USERS"] = "users";
  CacheTypes["VOICESTATES"] = "voiceStates";
  CacheTypes["DB_GUILDS"] = "dbGuilds";
  CacheTypes["DB_USERS"] = "dbUsers";
})(CacheTypes || (CacheTypes = {}));

export let ContextTypes;

(function (ContextTypes) {
  ContextTypes[ContextTypes["USER"] = 2] = "USER";
  ContextTypes[ContextTypes["MESSAGE"] = 3] = "MESSAGE";
})(ContextTypes || (ContextTypes = {}));

;
export let localeList;

(function (localeList) {
  localeList["ENGLISH"] = "en-us";
})(localeList || (localeList = {}));