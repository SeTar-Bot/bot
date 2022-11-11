import { iConfigService } from 'src/types';
import DiscordConfig from './discord.cfg';

export default () =>
  ({
    discordOptions: DiscordConfig(),
  } as iConfigService);
export { DiscordConfig };
