import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Client, ClientOptions } from 'discord.js';
import { InvalidTokenException } from 'src/exceptions';
import { iConfigService } from 'src/types';

@Injectable()
export class DiscordService {
  private readonly client: Client;
  constructor(
    private readonly token: string,
    private readonly configService: ConfigService = new ConfigService<iConfigService>(),
  ) {
    const clientOptions: ClientOptions =
      this.configService.get('discordOptions');
    this.client = new Client(clientOptions);
    this.login();
  }

  async login() {
    try {
      this.client.login(this.token);
    } catch (error) {
      throw new InvalidTokenException(error);
    }
  }
}
