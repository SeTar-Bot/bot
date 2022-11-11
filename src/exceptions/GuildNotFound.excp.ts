import { HttpException, HttpStatus } from '@nestjs/common';
import { StatusCodes } from './StatusCode.enum';

export class GuildNotFoundException extends HttpException {
  constructor(
    private readonly logData?: Error | string,
    private readonly messaage: string = 'Guild not found',
    private readonly stats: HttpStatus | StatusCodes = HttpStatus.NOT_FOUND,
  ) {
    super(messaage, stats);
    if (logData instanceof Error) console.error(logData);
    else if (logData) console.log(logData);
  }
}
