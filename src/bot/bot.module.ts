import { DiscordModule } from '@discord-nestjs/core';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GatewayIntentBits } from 'discord.js';
import { BotGateway } from './bot.gateway';
import { PlayCommand } from './commands/play.command';
import { PlaylistCommand } from './commands/playlist.command';
import { BaseInfoCommand } from './commands/registration.command';
import { StatsCommand } from './commands/stats.command';
import { PlayService } from './services/play.service';

@Module({
  imports: [
    DiscordModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        token: configService.getOrThrow('DISCORD_BOT_TOKEN'),
        prefix: configService.getOrThrow('DISCORD_BOT_PREFIX'),
        discordClientOptions: {
          intents: [
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMessages,
            // You must allow message content for your application in discord developers
            // https://support-dev.discord.com/hc/en-us/articles/4404772028055
            GatewayIntentBits.MessageContent,
          ],
        },
        registerCommandOptions: [
          {
            forGuild: configService.get('DISCORD_GUILD_ID_WITH_COMMANDS'),
            removeCommandsBefore: true,
          },
        ],
      }),
      inject: [ConfigService],
    }),
    DiscordModule.forFeature(),
  ],
  providers: [
    // Root service
    BotGateway,

    // Services
    PlayService,

    // Slash commands
    PlayCommand,
    PlaylistCommand,
    BaseInfoCommand,

    // Prefix commands
    StatsCommand,
  ],
})
export class BotModule {}
