import { HttpException, HttpStatus } from '@nestjs/common';
import { StatusCodes } from './StatusCode.enum';

export class CommandNotFoundException extends HttpException {
  constructor(
    private readonly logData?: Error | string,
    private readonly messaage: string = 'Command not found',
    private readonly stats: HttpStatus | StatusCodes = HttpStatus.NOT_FOUND,
  ) {
    super(messaage, stats);
    if (logData instanceof Error) console.error(logData);
    else if (logData) console.log(logData);
  }
}
