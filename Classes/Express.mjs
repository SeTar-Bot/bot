import express from "express";
export default class ExpressServer {
  constructor(client, port = Number(process.env.expressPort)) {
    this.server = express();
    this.server.listen(port, () => {
      console.log('Express Server intialized');
    });
    this.server;
  }

  handle(uri, method, cb) {
    if (!this.server[method]) throw new Error(`${method} is invalid.`);
    this.server[method](uri, (req, res) => {
      cb(this.client, req, res);
    });
  }

  getEndpoint(endpoint, cb) {
    this.server.get(endpoint, cb);
  }

  postEndpoint(endpoint, cb) {
    this.server.post(endpoint, cb);
  }

}