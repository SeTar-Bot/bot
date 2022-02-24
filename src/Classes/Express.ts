import chalk from "chalk";
import express, { Express, RequestHandler } from "express";
import { expreessEndpoints, expressMethods } from "../typings/enums";

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

    handle(uri: expreessEndpoints, method: expressMethods, cb: RequestHandler)
    {
        if(!this.server[method])
            throw new Error(`${method} is invalid.`);

        switch (method) {
            case expressMethods.GET:
                this.server.get(uri, cb);
                break;
            
            case expressMethods.POST:
                this.server.post(uri, cb);
                break;
                
            case expressMethods.PUT:
                this.server.put(uri, cb);
                break;

            case expressMethods.PATCH:
                this.server.patch(uri, cb);
                break;
        }
        
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