import { RequestHandler } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { botEndpointArgs, botEndpoints, EndpointMethods } from "../../types/classes";
import { expreessEndpoints } from "../typings/enums";

export default class Endpoint implements botEndpoints {

    readonly uri: expreessEndpoints;
    readonly method: EndpointMethods;
    public isAvailable: boolean;
    public handler: RequestHandler<ParamsDictionary, any, any, ParsedQs, Record<string, any>>;

    constructor(args: botEndpointArgs)
    {
        this.uri = args.uri;
        this.method = args.method;
        this.isAvailable = args.isAvailable;
        this.handler = args.handler;
    }

}