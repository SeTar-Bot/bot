import chalk from "chalk";
import express, { Express, RequestHandler } from "express";
import { expressCallback } from "../../types/classes";
import { expreessEndpoints, expressMethods } from "../typings/enums";
import Client from "./Client";

export default class ExpressServer {

    public server: Express;
    private client: Client;
    constructor(client: Client, port: number = Number(process.env.expressPort))
    {

        this.server = express();
        this.server.listen(port, () => {
            console.log('Express Server intialized');
        });
        this.server
    }

    handle(uri: expreessEndpoints, method: expressMethods, cb: expressCallback)
    {
        if(!this.server[method])
            throw new Error(`${method} is invalid.`);

        this.server[method as string](uri, (req: express.Request, res: express.Response) => {
            cb(this.client, req, res)
        });
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