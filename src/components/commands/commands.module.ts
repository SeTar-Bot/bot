import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CommandsService } from './commands.service';

@Module({
  imports: [ConfigModule],
  providers: [CommandsService],
})
export class CommandsModule {}
