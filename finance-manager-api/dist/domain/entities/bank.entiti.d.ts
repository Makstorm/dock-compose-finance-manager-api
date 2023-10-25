import { AbstractEntity } from './abstract.entity';
import { TransactionEntity } from './transaction.entity';
export declare class AccountEntity extends AbstractEntity {
    name: string;
    balance: number;
    transactions: TransactionEntity[];
}
