import { ClientOptions, Intents, Permissions, } from "discord.js";
import path from "path";
import { botOpts } from "../../../types/classes";
import Client from "../../Classes/Client";
//import * as pkg from "../../../package.json";
const botOptions: botOpts = {
    
    client: {
        restGlobalRateLimit: 50,
        intents: [
            Intents.FLAGS.GUILDS,
            Intents.FLAGS.GUILD_MESSAGES,
            Intents.FLAGS.GUILD_MEMBERS,
            Intents.FLAGS.GUILD_PRESENCES,
            Intents.FLAGS.GUILD_VOICE_STATES
        ],
        presence: {
            afk: false,
            status: 'dnd',
            activities: [
                {
                    type: 'WATCHING',
                    name: 'Changes on Reboot'
                }
            ]
        }
    } as ClientOptions,
    
    events: path.resolve(path.resolve(), "bot", "Events"),
    commands: path.resolve(path.resolve(),  "bot", "Components", "Commands"),
    buttons: path.resolve(path.resolve(), "bot", "Components", "Buttons"),
    contexts: path.resolve(path.resolve(), "bot", "Components", "Contexts"),
    endpoints: path.resolve(path.resolve(), "bot", "Components", "Endpoints"),
    databaseURI: process.env.databaseURI,
    inviteURL: process.env.inviteURL,
    supportURL: process.env.supportURL,
    websiteURL: process.env.websiteURL,
    serverURL: process.env.serverURL,
    serverPort: Number(process.env.PORT) || Number(process.env.expressPort),
    version: "v3.0.0-beta.2.2",//pkg.version,
    perms: [
        Permissions.FLAGS.ATTACH_FILES,
        Permissions.FLAGS.CONNECT,
        Permissions.FLAGS.CREATE_INSTANT_INVITE,
        Permissions.FLAGS.MANAGE_MESSAGES,
        Permissions.FLAGS.MUTE_MEMBERS,
        Permissions.FLAGS.PRIORITY_SPEAKER,
        Permissions.FLAGS.READ_MESSAGE_HISTORY,
        Permissions.FLAGS.REQUEST_TO_SPEAK,
        Permissions.FLAGS.SEND_MESSAGES,
        Permissions.FLAGS.SPEAK,
        Permissions.FLAGS.START_EMBEDDED_ACTIVITIES,
        Permissions.FLAGS.STREAM,
        Permissions.FLAGS.USE_APPLICATION_COMMANDS,
        Permissions.FLAGS.USE_EXTERNAL_EMOJIS,
        Permissions.FLAGS.USE_EXTERNAL_STICKERS,
        Permissions.FLAGS.USE_VAD,
        Permissions.FLAGS.VIEW_CHANNEL,
        Permissions.FLAGS.VIEW_GUILD_INSIGHTS
    ],
    readyPresence: (client: Client) => {
        return {
            afk: false,
            status: 'online',
            activities: [
                {
                    name: `Over ${client.guilds.cache.size} Servers`,
                    type: 'WATCHING'
                }
            ]
        }
    }
}
export default botOptions;