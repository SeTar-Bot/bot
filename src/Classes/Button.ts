import { botButtons, botButtonsArgs } from "../../types/classes";
import { BotPermissions } from "../typings/enums";

export default class Button implements botButtons {

    readonly name: string;
    readonly description: string;
    readonly permission: BotPermissions;
    readonly isAvailable: boolean;
    public run: (...any: any) => Promise<any>;
    constructor(args: botButtonsArgs)
    {
        this.name = args.name;
        this.description = args.description;
        this.permission = args.permission;
        this.isAvailable = args.isAvailable;
        this.run = args.run;
    }
    
}