import { DiscordModule } from '@discord-nestjs/core';
import { Module } from '@nestjs/common';
import { BotGateway } from './bot.gateway';
import { PlayCommand } from './commands/play.command';
import { PlaylistCommand } from './commands/playlist.command';
import { BaseInfoCommand } from './commands/registration.command';
import { PlayService } from './services/play.service';

@Module({
  imports: [DiscordModule.forFeature()],
  providers: [
    BotGateway,

    // Services
    PlayService,

    // Commands
    PlayCommand,
    PlaylistCommand,
    BaseInfoCommand,
  ],
})
export class BotModule {}
