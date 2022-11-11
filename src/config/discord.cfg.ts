import { ClientOptions, GatewayIntentBits } from 'discord.js';

export default () =>
  ({
    intents: [GatewayIntentBits.Guilds],
  } as ClientOptions);
