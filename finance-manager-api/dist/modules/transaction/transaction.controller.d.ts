import { TransactionModel, TransactionDto } from '@domain';
export declare class TransactionController {
    private readonly service;
    create(dto: TransactionDto): Promise<TransactionModel>;
    getAll(): Promise<TransactionModel[]>;
    delete(id: string): Promise<TransactionModel>;
}
