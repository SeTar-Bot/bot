import { Client as DjsClient, GuildBan, GuildEmoji, GuildMember, Invite, Message, MessageReaction, Presence, StageInstance, ThreadChannel, ThreadMember, User, VoiceState } from "discord.js";
import botOptions from "../bot/Config/botOptions.mjs";
import SetarDB from "../Database/index.mjs";
import Manager from "./Manager.mjs";
import RestClient from "./Rest.mjs";
import ora from "ora";
import { CacheTypes } from "../typings/enums.mjs";
import { localeManager } from "../locales/index.mjs";
import axios from "axios";
import ExpressServer from "./Express.mjs";
export default class Client extends DjsClient {
  axiosClient = axios;

  constructor(token, clientId, opts = botOptions) {
    super(opts.client);
    this.botToken = token;
    this.botId = clientId;
    this.axiosClient = axios;
    this.expressServer = new ExpressServer(opts.serverPort);
    this.login(this.botToken).then(() => {
      this.manager = new Manager(this, opts.commands, opts.events, opts.buttons, opts.contexts, opts.endpoints);
      this.restClient = new RestClient(this.botToken, this.botId);
      this.database = new SetarDB(opts.databaseURI);
      this.localeManager = new localeManager();
      this.intialize();
    }).catch(e => {
      throw e;
    });
  }

  async intialize() {
    /**
     * Intialize Steps
     * 1- Connects Database
     * 2- Load Events & Commands
     */
    return new Promise((resolve, reject) => {
      const myConsole = ora({
        text: 'Initializing Client [1/2]',
        spinner: 'aesthetic',
        color: 'magenta'
      }).start(); // 1- Connects Database

      this.database.intialize().then(dbStatus => {
        myConsole.text = 'Initializing Client [2/2]'; // 2- Load Events & Commands

        this.manager.setup().then(mngData => {
          myConsole.succeed(`Initializing Complete`);
          resolve(true);
        }).catch(e => {
          myConsole.fail(`Initializing Failed [Manager Step] Due error: ${e}`);
          reject(e);
        });
      }).catch(e => {
        myConsole.fail(`Initializing Failed [Database Step] Due error: ${e}`);
        reject(e);
      });
    });
  }

  clean(c) {
    let bans, emojis, members, invites, messages, presences, reactions, stages, threads, users, threadMembers, voiceStates, dbUsers, dbGuilds;

    switch (c) {
      case CacheTypes.ALL:
        bans = this.sweepers.sweepBans(s => s instanceof GuildBan);
        emojis = this.sweepers.sweepEmojis(s => s instanceof GuildEmoji);
        members = this.sweepers.sweepGuildMembers(s => s instanceof GuildMember);
        invites = this.sweepers.sweepInvites(s => s instanceof Invite);
        messages = this.sweepers.sweepMessages(s => s instanceof Message);
        presences = this.sweepers.sweepPresences(s => s instanceof Presence);
        reactions = this.sweepers.sweepReactions(s => s instanceof MessageReaction);
        /* @ts-ignore */

        stages = this.sweepers.sweepStageInstances(s => s instanceof StageInstance);
        threads = this.sweepers.sweepThreads(s => s instanceof ThreadChannel);
        threadMembers = this.sweepers.sweepThreadMembers(s => s instanceof ThreadMember);
        users = this.sweepers.sweepUsers(s => s instanceof User);
        voiceStates = this.sweepers.sweepVoiceStates(s => s instanceof VoiceState);
        dbUsers = this.database.users.cache.Reset('all');
        dbGuilds = this.database.guilds.cache.Reset('all');
        return {
          bans,
          emojis,
          members,
          invites,
          messages,
          presences,
          reactions,
          stages,
          threads,
          users,
          voiceStates,
          dbUsers,
          dbGuilds,
          total: bans + emojis + members + invites + messages + presences + reactions + stages + users + voiceStates
        };
        break;

      case CacheTypes.BAN:
        bans = this.sweepers.sweepBans(s => s instanceof GuildBan);
        return {
          bans
        };
        break;

      case CacheTypes.EMOJI:
        emojis = this.sweepers.sweepEmojis(s => s instanceof GuildEmoji);
        return {
          emojis
        };
        break;

      case CacheTypes.INVITE:
        invites = this.sweepers.sweepInvites(s => s instanceof Invite);
        return {
          invites
        };
        break;

      case CacheTypes.MEMBER:
        members = this.sweepers.sweepGuildMembers(s => s instanceof GuildMember);
        return {
          members
        };
        break;

      case CacheTypes.MESSAGE:
        messages = this.sweepers.sweepMessages(s => s instanceof Message);
        return {
          messages
        };
        break;

      case CacheTypes.PRESENCE:
        presences = this.sweepers.sweepPresences(s => s instanceof Presence);
        return {
          presences
        };
        break;

      case CacheTypes.REACTION:
        reactions = this.sweepers.sweepReactions(s => s instanceof MessageReaction);
        return {
          reactions
        };
        break;

      case CacheTypes.STAGE:
        stages = this.sweepers.sweepStageInstnaces(s => s instanceof StageInstance);
        return {
          stages
        };
        break;

      case CacheTypes.THREAD:
        threads = this.sweepers.sweepThreads(s => s instanceof ThreadChannel);
        return {
          threads
        };
        break;

      case CacheTypes.THREAD_MEMBER:
        threadMembers = this.sweepers.sweepThreadMembers(s => s instanceof ThreadMember);
        return {
          threadMembers
        };
        break;

      case CacheTypes.USERS:
        users = this.sweepers.sweepUsers(s => s instanceof User);
        return {
          users
        };
        break;

      case CacheTypes.VOICESTATES:
        voiceStates = this.sweepers.sweepVoiceStates(s => s instanceof VoiceState);
        return {
          voiceStates
        };
        break;

      case CacheTypes.DB_USERS:
        dbUsers = this.database.users.cache.Reset('all');
        if (dbUsers) return {
          dbUsers
        };else return {};
        break;

      case CacheTypes.DB_GUILDS:
        dbGuilds = this.database.guilds.cache.Reset('all');
        if (dbGuilds) return {
          dbGuilds
        };else return {};
        break;
    }
  }

}