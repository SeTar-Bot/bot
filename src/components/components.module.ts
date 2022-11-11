import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ComponentsService } from './components.service';
import { CommandsModule } from './commands/commands.module';

@Module({
  imports: [ConfigService, CommandsModule],
  providers: [ComponentsService],
})
export class ComponentsModule {}
