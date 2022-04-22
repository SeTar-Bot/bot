import express, { Express, RequestHandler } from "express";
import { expreessEndpoints } from "../typings/enums";

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