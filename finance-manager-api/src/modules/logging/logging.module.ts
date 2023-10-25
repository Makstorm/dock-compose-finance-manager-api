import { Module } from '@nestjs/common';
import { LoggingService } from './logging.service';
import { LoggingServiceTag } from '@domain';

@Module({
  providers: [{ provide: LoggingServiceTag, useClass: LoggingService }],
  exports: [LoggingServiceTag],
})
export class LoggingModule {}
