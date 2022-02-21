export default class Button {
  constructor(args) {
    this.name = args.name;
    this.description = args.description;
    this.permission = args.permission;
    this.isAvailable = args.isAvailable;
    this.run = args.run;
  }

}