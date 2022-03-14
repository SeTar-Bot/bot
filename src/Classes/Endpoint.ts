import { Express } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { botEndpointArgs, botEndpoints, expressCallback } from "../../types/classes";
import { expreessEndpoints, expressMethods } from "../typings/enums";

export default class Endpoint implements botEndpoints {

    readonly uri: expreessEndpoints;
    readonly method: expressMethods;
    public isAvailable: boolean;
    public testPing: boolean;
    public handler: expressCallback;

    constructor(args: botEndpointArgs)
    {
        this.uri = args.uri;
        this.method = args.method;
        this.isAvailable = args.isAvailable;
        this.testPing = args.testPing;
        this.handler = args.handler;
    }

}