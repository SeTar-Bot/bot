import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Command, CommandSchema } from '../schemas';
import { CommandsService } from './commands.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Command.name, schema: CommandSchema }]),
  ],
  providers: [CommandsService],
  exports: [CommandsService],
})
export class CommandsModule {}
