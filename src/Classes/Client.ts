import { Client as DjsClient, GuildBan, GuildEmoji, GuildMember, Invite, Message, MessageReaction, Presence, StageInstance, ThreadChannel, ThreadMember, User, VoiceState } from "discord.js";
import { botOpts, CacheTypeResult } from "../../types/classes";
import botOptions from "../bot/Config/botOptions";
import SetarDB from "../Database";
import Manager from "./Manager";
import RestClient from "./Rest";
import ora from "ora";
import { CacheTypes } from "../typings/enums";
import { localeManager } from "../locales";
import axios from "axios";
import ExpressServer from "./Express";
import { DartVoiceManager } from "dartjs";
import { Deezer, SoundCloud, Spotify, YouTube } from "music-engines";
import UtilClient from "@setar/utils";
import AudioManager from "./Audio";
export default class Client extends DjsClient {

    public manager: Manager;
    public Utils: UtilClient;
    public restClient: RestClient;
    public database: SetarDB;
    private botToken: string;
    public botId: string;
    readonly version: string;
    public localeManager: localeManager;
    public axiosClient: typeof axios = axios;
    public expressServer: ExpressServer;
    public audioClient: AudioManager;
    public playerClient: DartVoiceManager;
    readonly playerEngines = {
        youtube: new YouTube(),
        soundcloud: new SoundCloud(),
        deezer: new Deezer(),
        spotify: new Spotify()
    };

    constructor(token: string, clientId: string, opts: botOpts = botOptions)
    {
        super(opts.client);
        this.botToken = token;
        this.botId = clientId;
        this.axiosClient = axios;
        this.expressServer = new ExpressServer(opts.serverPort);
        this.Utils = new UtilClient(this);
        this.login(this.botToken)
        .then(() => {
            this.manager = new Manager(this, opts.commands, opts.events, opts.buttons, opts.contexts, opts.endpoints);
            this.restClient = new RestClient(this.botToken, this.botId);
            this.database = new SetarDB(opts.databaseURI);
            this.localeManager = new localeManager();
            this.playerClient = new DartVoiceManager(this); 
            this.audioClient = new AudioManager(this.playerClient);
            
            this.intialize()
            .then(() => {
                this.emit("ready", this);
            })
            .catch(e => { throw e });
            
        })
        .catch(e => { throw e });
    }

    public async intialize(): Promise<any> {

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
            }).start();
            // 1- Connects Database
            this.database.intialize()
            .then(() => {
                myConsole.text = 'Initializing Client [2/2]'
                // 2- Load Events & Commands
                this.manager.setup()
                .then(() => {
                    myConsole.succeed(`Initializing Complete`);
                    resolve(true);
                })
                .catch(e => {
                    myConsole.fail(`Initializing Failed [Manager Step] Due error: ${e}`);
                    reject(e);
                });
            })
            .catch(e => {
                myConsole.fail(`Initializing Failed [Database Step] Due error: ${e}`);
                reject(e);
            });
        });
    }

    clean(c: CacheTypes): CacheTypeResult
    {
        let bans: number,
            emojis: number,
            members: number,
            invites: number,
            messages: number,
            presences: number,
            reactions: number,
            stages: number,
            threads: number,
            users: number,
            threadMembers: number,
            voiceStates: number,
            dbUsers: any | void,
            dbGuilds: any | void;
        switch (c){
            case CacheTypes.ALL:
                bans = this.sweepers.sweepBans(s => s instanceof GuildBan);
                emojis = this.sweepers.sweepEmojis(s => s instanceof GuildEmoji);
                members = this.sweepers.sweepGuildMembers(s => s instanceof GuildMember);
                invites = this.sweepers.sweepInvites(s => s instanceof Invite);
                messages = this.sweepers.sweepMessages(s => s instanceof Message);
                presences = this.sweepers.sweepPresences(s => s instanceof Presence);
                reactions = this.sweepers.sweepReactions(s => s instanceof MessageReaction);
                /* eslint-disable */
                /* @ts-ignore */
                stages = this.sweepers.sweepStageInstances(s => s instanceof StageInstance);
                /* eslint-enable */
                threads = this.sweepers.sweepThreads(s => s instanceof ThreadChannel);
                threadMembers = this.sweepers.sweepThreadMembers(s => s instanceof ThreadMember);
                users = this.sweepers.sweepUsers(s => s instanceof User);
                voiceStates = this.sweepers.sweepVoiceStates(s => s instanceof VoiceState);
                dbUsers = this.database.users.cache.clear();
                dbGuilds = this.database.guilds.cache.clear();
                return { bans, emojis, members, invites, messages, presences, reactions, stages, threads, users, voiceStates, dbUsers, dbGuilds, 
                    total: bans + emojis + members + invites + messages + presences + reactions + stages + users + voiceStates };
            break;

            case CacheTypes.BAN:
                bans = this.sweepers.sweepBans(s => s instanceof GuildBan);
                return { bans };
            break;

            case CacheTypes.EMOJI:
                emojis = this.sweepers.sweepEmojis(s => s instanceof GuildEmoji);
                return { emojis };
            break;
        
            case CacheTypes.INVITE:
                invites = this.sweepers.sweepInvites(s => s instanceof Invite);
                return { invites };
            break;

            case CacheTypes.MEMBER:
                members = this.sweepers.sweepGuildMembers(s => s instanceof GuildMember);
                return { members };
            break;

            case CacheTypes.MESSAGE:
                messages = this.sweepers.sweepMessages(s => s instanceof Message);
                return { messages }; 
            break;

            case CacheTypes.PRESENCE:
                presences = this.sweepers.sweepPresences(s => s instanceof Presence);
                return { presences };
            break;

            case CacheTypes.REACTION:
                reactions = this.sweepers.sweepReactions(s => s instanceof MessageReaction);
                return { reactions };
            break;

            case CacheTypes.STAGE:
                stages = this.sweepers.sweepStageInstnaces(s => s instanceof StageInstance);
                return { stages };
            break;

            case CacheTypes.THREAD:
                threads = this.sweepers.sweepThreads(s => s instanceof ThreadChannel);
                return { threads };
            break;

            case CacheTypes.THREAD_MEMBER:
                threadMembers = this.sweepers.sweepThreadMembers(s => s instanceof ThreadMember);
                return { threadMembers };
            break;

            case CacheTypes.USERS:
                users = this.sweepers.sweepUsers(s => s instanceof User);
                return { users };
            break;

            case CacheTypes.VOICESTATES:
                voiceStates = this.sweepers.sweepVoiceStates(s => s instanceof VoiceState);
                return { voiceStates };
            break;

            case CacheTypes.DB_USERS:
                this.database.users.cache.clear();
                return {};
            break;

            case CacheTypes.DB_GUILDS:
                this.database.guilds.cache.clear();
                return {};
            break;
        }
    }
}