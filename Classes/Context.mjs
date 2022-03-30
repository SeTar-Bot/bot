export default class Context {
  constructor(ctxArgs) {
    this.name = ctxArgs.name;
    this.type = ctxArgs.type;
    this.run = ctxArgs.run;
  }

}