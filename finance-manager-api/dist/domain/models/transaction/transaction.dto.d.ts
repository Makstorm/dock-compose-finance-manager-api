import { TransactionType } from '../../../core';
export declare class TransactionDto {
    accountId: string;
    amount: number;
    type: TransactionType;
    description: string;
    categoryId: string;
}
