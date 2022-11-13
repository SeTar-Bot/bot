import { PrefixCommandTransformPipe } from '@discord-nestjs/common';
import {
  InjectDiscordClient,
  On,
  Once,
  Payload,
  PrefixCommand,
  UseGuards,
  UsePipes,
} from '@discord-nestjs/core';
import { Injectable, Logger } from '@nestjs/common';
import { Client, Message } from 'discord.js';
import { StartDto } from './dto/start.dto';

import { MessageFromUserGuard } from './guards/message-from-user.guard';
import { MessageToUpperPipe } from './pipes/message-to-upper.pipe';

@Injectable()
export class BotGateway {
  private readonly logger = new Logger(BotGateway.name);

  constructor(
    @InjectDiscordClient()
    private readonly client: Client,
  ) {}

  @Once('ready')
  onReady() {
    this.logger.log(`Bot ${this.client.user.tag} was started!`);
  }

  @On('messageCreate')
  @UseGuards(MessageFromUserGuard)
  @UsePipes(MessageToUpperPipe)
  async onMessage(message: Message): Promise<void> {
    this.logger.log(`Incoming message: ${message.content}`);

    await message.reply('Message processed successfully');
  }

  @PrefixCommand('start')
  @UsePipes(PrefixCommandTransformPipe)
  async onStartPrefixCommand(@Payload() dto: StartDto): Promise<string> {
    console.log('start DTO', dto);

    return 'Start message processed successfully';
  }
}
