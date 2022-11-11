import { DynamicModule, Module, Provider } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DiscordService } from './discord.service';
import { DISCORD_SERVICE } from 'src/constants';
import { ComponentsModule } from 'src/components/components.module';

@Module({})
export class DiscordModule {
  static forRoot(token: string): DynamicModule {
    const discordProvider: Provider = {
      provide: DISCORD_SERVICE,
      useValue: new DiscordService(token),
    };
    return {
      module: DiscordModule,
      imports: [ConfigModule, ComponentsModule],
      providers: [discordProvider],
      exports: [discordProvider],
      global: true,
    };
  }
}
