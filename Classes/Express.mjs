import express from "express";
export default class ExpressServer {
  constructor(port = Number(process.env.expressPort)) {
    this.server = express();
    this.server.listen(port, () => {
      console.log('Express Server intialized');
    });
    this.server;
  }

  handle(uri, method, cb) {
    if (!this[method]) throw new Error(`${method} is invalid.`);
    this[method](uri, cb);
  }

  getEndpoint(endpoint, cb) {
    this.server.get(endpoint, cb);
  }

  postEndpoint(endpoint, cb) {
    this.server.post(endpoint, cb);
  }

}