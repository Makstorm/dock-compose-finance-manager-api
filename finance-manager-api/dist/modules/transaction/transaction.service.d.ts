import { ITransactionService, TransactionDto, TransactionEntity } from '@domain';
import { EventEmitter2 } from '@nestjs/event-emitter';
export declare class TransactionService implements ITransactionService {
    private eventEmitter;
    constructor(eventEmitter: EventEmitter2);
    private readonly repository;
    private readonly accountRepository;
    private readonly categoryService;
    private readonly logService;
    create(dto: TransactionDto): Promise<TransactionEntity>;
    delete(id: string): Promise<TransactionEntity>;
    getAll(): Promise<TransactionEntity[]>;
    private emitingAccountEvent;
}
