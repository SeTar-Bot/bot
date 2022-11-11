import {
  Client,
  CommandInteraction,
  GuildResolvable,
  SlashCommandBuilder,
} from 'discord.js';
import { permissions } from 'src/types';

export class Command {
  constructor(
    readonly name: string,
    readonly description: string,
    readonly builder: SlashCommandBuilder,
    readonly isAvailable: boolean,
    readonly executer: (
      client: Client,
      ctx: CommandInteraction,
      ...args: unknown[]
    ) => Promise<void> | void,
    readonly permission: permissions = permissions.MEMBER,
    readonly guild?: GuildResolvable,
  ) {}

  async run(client: Client, ctx: CommandInteraction, ...args: unknown[]) {
    const result = this.executer(client, ctx, ...args);
    if (result instanceof Promise) return await result;
    else return result;
  }
}
