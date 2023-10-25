import { TransactionEntity } from '@domain';
export declare class TransactionModel {
    id: string;
    type: string;
    amount: number;
    static formEntity(transaction: TransactionEntity): TransactionModel;
}
