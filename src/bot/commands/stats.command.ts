import { TransformPipe, ValidationPipe } from '@discord-nestjs/common';
import {
  Command,
  DiscordTransformedCommand,
  Payload,
  UseFilters,
  UsePipes,
} from '@discord-nestjs/core';

import { StatsDto } from '../dto/stats.dto';
import { CommandValidationFilter } from '../validation/command.validation';

@Command({
  name: 'stats',
  description: 'Get user stats',
})
@UsePipes(TransformPipe, ValidationPipe)
@UseFilters(CommandValidationFilter)
export class StatsCommand implements DiscordTransformedCommand<StatsDto> {
  handler(@Payload() dto: StatsDto): string {
    console.log('stats DTO', dto); // TODO: remove

    return 'Player stats...';
  }
}
