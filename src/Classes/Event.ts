import { botEvents, botEventsArgs } from "../../types/classes";
import Client from "./Client";
import Inhibitor from "./Inhibitor";

export default class Event implements botEvents {

    public name: string;
    public isAvailable: boolean;
    public executer: (...any: any) => Promise<any | void>;
    readonly inhibitors?: Inhibitor[];

    private hasInhibitors: boolean = false;

    constructor(setupArgs: botEventsArgs)
    {
        this.name = setupArgs.name
        this.isAvailable = setupArgs.isAvailable;
        this.executer = setupArgs.run;

        if(setupArgs.inhibitors && setupArgs.inhibitors.length > 0)
        {
            this.inhibitors = setupArgs.inhibitors,
            this.hasInhibitors = true;
        }
    }

    async run(...any: any): Promise<any> {
        try {
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
        } catch (error) {
            
        }
    }
}