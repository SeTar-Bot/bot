import { ClientOptions } from 'discord.js';

export interface iConfigService extends Record<string, unknown | undefined> {
  discordOptions: ClientOptions;
}
