import chalk from "chalk";
import express, { Express, RequestHandler } from "express";
import { EndpointMethods } from "../../types/classes";
import { expreessEndpoints } from "../typings/enums";

export default class ExpressServer {

    public server: Express;
    constructor(port: number = Number(process.env.expressPort))
    {
        this.server = express();
        this.server.listen(port, () => {
            console.log('Express Server intialized');
        });
        this.server
    }

    handle(uri: expreessEndpoints, method: EndpointMethods, cb: RequestHandler)
    {
        if(!this[method])
            throw new Error(`${method} is invalid.`);

        this[method](uri, cb);
    }

    getEndpoint(endpoint: expreessEndpoints, cb: RequestHandler)
    {
        this.server.get(endpoint, cb);
    }

    postEndpoint(endpoint: expreessEndpoints, cb: RequestHandler)
    {
        this.server.post(endpoint, cb);
    }
}