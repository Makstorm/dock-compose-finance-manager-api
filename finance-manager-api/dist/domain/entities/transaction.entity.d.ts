import { TransactionType } from 'src/core';
import { AbstractEntity } from './abstract.entity';
import { AccountEntity } from './bank.entiti';
import { CategoryEntity } from './category.entity';
export declare class TransactionEntity extends AbstractEntity {
    amount: number;
    description: string;
    type: TransactionType;
    account: AccountEntity;
    accountId: string;
    moneyLeft: number;
    category: CategoryEntity;
    categoryId: string;
}
