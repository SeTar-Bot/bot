import { botEvents, EventTypes } from "../../types/classes";
import Inhibitor from "./Inhibitor";

export default class Event implements botEvents {

    public name: string;
    public isAvailable: boolean;
    public type: EventTypes;
    public executer: (...any: any) => Promise<any | void>;
    readonly inhibitors?: Inhibitor[];

    private hasInhibitors = false;

    constructor(setupArgs: botEvents)
    {
        this.name = setupArgs.name
        this.isAvailable = setupArgs.isAvailable;
        this.type = setupArgs.type;
        this.executer = setupArgs.run;

        if(setupArgs.inhibitors && setupArgs.inhibitors.length > 0)
        {
            this.inhibitors = setupArgs.inhibitors,
            this.hasInhibitors = true;
        }
    }

    async run(...any: any): Promise<any> {
        if(this.hasInhibitors && this.inhibitors)
        {
            for (const inhibitor of this.inhibitors)
            {
                try {
                    const bool = await inhibitor.execute(...any);
                    if(!bool)
                        throw new Error(`Inhibitor ${inhibitor.name} didn't passed it.`);
                } catch (error) {
                    throw new Error(`Inhibitor ${inhibitor.name} has been failed due Error: ${error}`);
                } 
            }

            return await this.executer(...any)
        }
        else
            return await this.executer(...any)
    }
}