import { localeList } from "../typings/enums.mjs";
import locales from "./list.mjs";

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