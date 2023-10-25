import { LoggingPaymentDto } from '../../models';

export interface ILoggingService {
  logPaymentAction(dto: LoggingPaymentDto): Promise<void>;
}
