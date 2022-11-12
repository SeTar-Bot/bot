import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Client, ClientOptions, REST } from 'discord.js';
import { InvalidTokenException } from 'src/exceptions';
import { IConfigService } from '../config';

@Injectable()
export class DiscordService {
  readonly restClient: REST;
  private readonly client: Client;
  constructor(
    private readonly token: string,
    private readonly configService: ConfigService = new ConfigService<IConfigService>(),
  ) {
    const clientOptions: ClientOptions =
      this.configService.get('discordOptions');
    this.client = new Client(clientOptions);
    this.login();
    this.restClient = new REST().setToken(this.token);
  }

  async login() {
    try {
      this.client.login(this.token);
    } catch (error) {
      throw new InvalidTokenException(error);
    }
  }
}
