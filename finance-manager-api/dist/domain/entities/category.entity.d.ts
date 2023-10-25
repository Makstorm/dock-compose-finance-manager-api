import { AbstractEntity } from './abstract.entity';
import { TransactionEntity } from './transaction.entity';
export declare class CategoryEntity extends AbstractEntity {
    name: string;
    transactions: TransactionEntity[];
}
