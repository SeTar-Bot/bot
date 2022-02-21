import { localeList } from "../typings/enums.mjs";
import en_us from "./en-us/index.mjs";
const locales = {
  'en-us': en_us
};

class localeManager {
  all = locales;

  constructor(defaultLang = localeList.ENGLISH) {
    this.language = this.all[defaultLang];
    this.lang = defaultLang;
  }

  getLocale(lang = this.lang) {
    return this.all[lang];
  }

  setLanguage(lang = localeList.ENGLISH) {
    this.language = this.all[lang];
  }

}

export { locales, localeManager };