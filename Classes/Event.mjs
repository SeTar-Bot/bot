export default class Event {
  hasInhibitors = false;

  constructor(setupArgs) {
    this.name = setupArgs.name;
    this.isAvailable = setupArgs.isAvailable;
    this.executer = setupArgs.run;

    if (setupArgs.inhibitors && setupArgs.inhibitors.length > 0) {
      this.inhibitors = setupArgs.inhibitors, this.hasInhibitors = true;
    }
  }

  async run(...any) {
    try {
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
    } catch (error) {}
  }

}