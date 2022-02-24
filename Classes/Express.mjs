import express from "express";
import { expressMethods } from "../typings/enums.mjs";
export default class ExpressServer {
  constructor(port = Number(process.env.expressPort)) {
    this.server = express();
    this.server.listen(port, () => {
      console.log('Express Server intialized');
    });
    this.server;
  }

  handle(uri, method, cb) {
    if (!this.server[method]) throw new Error(`${method} is invalid.`);

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

  getEndpoint(endpoint, cb) {
    this.server.get(endpoint, cb);
  }

  postEndpoint(endpoint, cb) {
    this.server.post(endpoint, cb);
  }

}