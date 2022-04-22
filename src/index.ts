import setarBot from "./bot";
import Classes from "./Classes";
import SetarDB from "./Database";
import { locales, localeManager } from "./locales";
import * as BotEnums from "./typings/enums";

const Bot = setarBot
const Locale = {
    list: locales,
    manager: localeManager
};

export default Bot;
export {
    setarBot as Bot,
    Classes,
    SetarDB as Database,
    Locale,
    BotEnums,
}