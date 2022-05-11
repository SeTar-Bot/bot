import { botContenxts } from "../../types/classes";
import { BotPermissions, ContextTypes } from "../typings/enums";

export default class Context implements botContenxts {

    readonly name: string;
    readonly type: ContextTypes;
    readonly permission: BotPermissions;
    public isAvailable: boolean;
    public run: (...any: any) => Promise<any | void>;

    constructor(ctxArgs: botContenxts)
    {
        this.name = ctxArgs.name;
        this.type = ctxArgs.type;
        this.run = ctxArgs.run;
    }
}