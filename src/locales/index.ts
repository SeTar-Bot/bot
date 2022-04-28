import { localeBase } from "../../types/localeSchema";
import { localeList } from "../typings/enums";
import locales from "./list";
class localeManager {

    public language: localeBase;
    readonly all = locales;
    private lang: localeList;
    constructor(defaultLang: localeList = localeList.ENGLISH)
    {
        this.language = this.all[defaultLang];
        this.lang = defaultLang;
    }

    getLocale(lang: localeList = this.lang): localeBase
    {
        return this.all[lang];
    }
    
    setLanguage(lang: localeList = localeList.ENGLISH)
    {
        this.language = this.all[lang];
    }

}

export { locales, localeManager };