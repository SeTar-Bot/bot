import { ClientOptions } from 'discord.js';
import DiscordConfig from './discord.cfg';

export interface IConfigService extends Record<string, unknown | undefined> {
  discordOptions: ClientOptions;
}

export default () =>
  ({
    discordOptions: DiscordConfig(),
  } as IConfigService);
export { DiscordConfig };
