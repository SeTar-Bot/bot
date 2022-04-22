import mongoose from "mongoose";
import GuildManager from "./Classes/GuildManager.mjs";
import UserManager from "./Classes/UserManager.mjs";
export default class SetarDB {
  client = mongoose;

  constructor(uri) {
    this.URI = uri;
  }

  async intialize() {
    await this.client.connect(this.URI);
    this.guilds = new GuildManager(this.client);
    this.users = new UserManager(this.client);
  }

  async sync(guilds) {
    // eslint-disable-next-line
    const botGuilds = [...guilds].map(([name, body]) => body);
    let addedGuilds = 0,
        removedGuilds = 0;
    const dbGuilds = await this.guilds.model.find();

    for await (const guild of botGuilds) {
      const dbGuild = dbGuilds.find(v => v.id == guild.id);

      if (!dbGuild) {
        // Add
        await this.guilds.add(guild);
        addedGuilds++;
      }
    }

    for await (const dbGuild of dbGuilds) {
      const botGuild = botGuilds.find(v => v.id == dbGuild.id);

      if (!botGuild) {
        // Remove
        await this.guilds.remove(dbGuild.id);
        removedGuilds++;
      }
    }

    return {
      new: addedGuilds,
      old: removedGuilds
    };
  }

}