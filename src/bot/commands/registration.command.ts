import { TransformPipe } from '@discord-nestjs/common';
import {
  Command,
  DiscordTransformedCommand,
  Payload,
  TransformedCommandExecutionContext,
  UsePipes,
} from '@discord-nestjs/core';
import { Injectable } from '@nestjs/common';
import { RegistrationDto } from '../dto/registration.dto';

@Command({
  name: 'reg',
  description: 'User registration',
})
@Injectable()
@UsePipes(TransformPipe)
export class BaseInfoCommand
  implements DiscordTransformedCommand<RegistrationDto>
{
  async handler(
    @Payload() dto: RegistrationDto,
    executionContext: TransformedCommandExecutionContext<any>,
  ) {
    return `User was registered with name: ${dto.name}, age ${dto.age} and city ${dto.city}`;
  }
}
