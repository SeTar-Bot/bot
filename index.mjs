import setarBot from "./bot/index.mjs";
import Classes from "./Classes/index.mjs";
import SetarDB from "./Database/index.mjs";
import { locales, localeManager } from "./locales/index.mjs";
import * as BotEnums from "./typings/enums.mjs";
const Bot = setarBot;
const Locale = {
  list: locales,
  manager: localeManager
};
export default Bot;
export { setarBot as Bot, Classes, SetarDB as Database, Locale, BotEnums };