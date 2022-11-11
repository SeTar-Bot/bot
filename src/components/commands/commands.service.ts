import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { iConfigService } from 'src/types';
import { Command } from '../builders';
import * as commands from './files';
@Injectable()
export class CommandsService {
  private readonly commands: Map<string, Command> = new Map();

  constructor(private readonly configService: ConfigService<iConfigService>) {}

  async loadCommands() {
    const commadList = Object.keys(commands);

    for (const i of commadList) {
      const command = commands[i] as Command;
      this.commands.set(i, command);
    }
  }

  async registerCommand() {
    return;
  }
}
