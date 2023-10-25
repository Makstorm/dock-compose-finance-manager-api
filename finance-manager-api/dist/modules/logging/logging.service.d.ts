import { ILoggingService, LoggingPaymentDto } from '@domain';
export declare class LoggingService implements ILoggingService {
    private logger;
    constructor();
    logPaymentAction(dto: LoggingPaymentDto): Promise<void>;
}
