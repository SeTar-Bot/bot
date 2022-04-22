import chalk from "chalk";
import express, { Express, RequestHandler } from "express";
import { expressCallback } from "../../types/classes";
import { expreessEndpoints, expressMethods } from "../typings/enums";
import Client from "./Client";

export default class ExpressServer {

    public server: Express;
    constructor(port = Number(process.env.expressPort))
    {

        this.server = express();
        this.server.listen(port, () => {
            console.log('Express Server intialized');
        });
        this.server
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