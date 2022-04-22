export default class Command {
  hasInhibitors = false;

  constructor(setupArgs) {
    this.name = setupArgs.name;
    this.description = setupArgs.description;
    this.permission = setupArgs.permission;
    this.isAvailable = setupArgs.isAvailable;
    this.builder = setupArgs.builder;

    if (setupArgs.inhibitors && setupArgs.inhibitors.length > 0) {
      this.inhibitors = setupArgs.inhibitors, this.hasInhibitors = true;
    }

    this.executer = setupArgs.run;
  }

  async run(...any) {
    if (this.hasInhibitors && this.inhibitors) {
      for (const inhibitor of this.inhibitors) {
        try {
          const bool = await inhibitor.execute(...any);
          if (!bool) throw new Error(`Inhibitor ${inhibitor.name} didn't passed it.`);
        } catch (error) {
          throw new Error(`Inhibitor ${inhibitor.name} has been failed due Error: ${error}`);
        }
      }

      return await this.executer(...any);
    } else return await this.executer(...any);
  }

}