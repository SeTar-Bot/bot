import { REST } from "@discordjs/rest";
import { Routes } from 'discord-api-types/v9';
export default class RestClient extends REST {
  constructor(token, clientId, opts = {
    version: '9'
  }) {
    super(opts);
    this.setToken(token);
    this.appId = clientId;
  }

  async addCommand(cmds, guild) {
    if (!guild) {
      return await this.put(Routes.applicationCommands(this.appId), {
        body: cmds
      });
    }

    return await this.put(Routes.applicationGuildCommands(this.appId, guild), {
      body: cmds
    });
  }

  async updateCommand(cmdManager, guild, data) {
    return await cmdManager.create(data, guild);
  }

}