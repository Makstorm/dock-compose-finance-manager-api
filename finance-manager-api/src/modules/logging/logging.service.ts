import { ILoggingService, LoggingPaymentDto } from '@domain';
import { Injectable } from '@nestjs/common';

import * as winston from 'winston';

@Injectable()
export class LoggingService implements ILoggingService {
  private logger: winston.Logger;

  public constructor() {
    this.logger = winston.createLogger({
      level: 'info', // Ви можете налаштувати бажаний рівень логування
      format: winston.format.json(), // Формат логування JSON
      transports: [
        new winston.transports.File({ filename: 'payment-logs.log' }), // Записувати логи в файл payment-logs.log
      ],
    });
  }

  public async logPaymentAction(dto: LoggingPaymentDto): Promise<void> {
    this.logger.info({
      ...dto,
    });
  }
}
