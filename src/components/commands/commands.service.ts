import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IConfigService } from '../../config';
import { Command } from '../builders';
import * as commands from './files';
@Injectable()
export class CommandsService {
  private readonly commands: Map<string, Command> = new Map();

  constructor(private readonly configService: ConfigService<IConfigService>) {}

  async loadCommands() {
    const cmdList = Object.keys(commands);

    for (const i of cmdList) {
      const command = commands[i] as Command;
      this.commands.set(i, command);
    }
  }

  async registerCommand() {
    return;
  }
}
