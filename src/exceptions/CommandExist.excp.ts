import { HttpException, HttpStatus } from '@nestjs/common';
import { StatusCodes } from './StatusCode.enum';

export class CommandExistException extends HttpException {
  constructor(
    private readonly logData?: Error | string,
    private readonly messaage: string = 'Command already exist',
    private readonly stats: HttpStatus | StatusCodes = HttpStatus.CONFLICT,
  ) {
    super(messaage, stats);
    if (logData instanceof Error) console.error(logData);
    else if (logData) console.log(logData);
  }
}
