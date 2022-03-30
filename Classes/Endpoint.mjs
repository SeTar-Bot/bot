export default class Endpoint {
  constructor(args) {
    this.uri = args.uri;
    this.method = args.method;
    this.isAvailable = args.isAvailable;
    this.testPing = args.testPing;
    this.handler = args.handler;
  }

}