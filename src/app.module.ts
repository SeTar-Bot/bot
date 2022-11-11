import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import GeneralConfig from './config';
import { DiscordModule } from './discord/discord.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [GeneralConfig],
      isGlobal: true,
    }),
    DiscordModule.forRoot(process.env.DISCORD_TOKEN),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
