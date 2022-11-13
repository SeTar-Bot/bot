import { TransformPipe } from '@discord-nestjs/common';
import {
  Command,
  DiscordTransformedCommand,
  Payload,
  TransformedCommandExecutionContext,
  UsePipes,
} from '@discord-nestjs/core';

import { PlayDto } from '../dto/play.dto';
import { PlayService } from '../services/play.service';

@Command({
  name: 'play',
  description: 'Plays a song',
})
@UsePipes(TransformPipe)
export class PlayCommand implements DiscordTransformedCommand<PlayDto> {
  constructor(private readonly playService: PlayService) {}

  handler(
    @Payload() dto: PlayDto,
    { interaction }: TransformedCommandExecutionContext,
  ): string {
    console.log('DTO', dto); // TODO: remove
    console.log('Interaction', interaction); // TODO: remove

    return this.playService.play(dto.song);
  }
}
