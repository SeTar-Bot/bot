import { inhibitorArgs } from "../../types/classes";
import Client from "./Client";

export default class Inhibitor {

    public name: string;
    public client: Client;
    public execute: (...any: any) => Promise<boolean>;

    constructor(args: inhibitorArgs)
    {
        this.client = args.client;
        this.name = args.name;
        this.execute = args.execute;
    }

}