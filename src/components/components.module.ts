import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CommandsModule } from './commands/commands.module';
import { ComponentsService } from './components.service';

@Module({
  imports: [ConfigService, CommandsModule],
  providers: [ComponentsService],
})
export class ComponentsModule {}
