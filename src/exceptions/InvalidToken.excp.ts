import { HttpException, HttpStatus } from '@nestjs/common';
import { StatusCodes } from './StatusCode.enum';
export class InvalidTokenException extends HttpException {
  constructor(
    private readonly logData: Error | string,
    private readonly messaage: string = 'Invalid Token Recived',
    private readonly stats:
      | HttpStatus
      | StatusCodes = StatusCodes.INVALID_TOKEN,
  ) {
    super(messaage, stats);
    if (logData instanceof Error) console.error(logData);
    else console.log(logData);
  }
}
