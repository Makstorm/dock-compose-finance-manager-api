import { TransactionEntity } from '../../entities';
export declare const enum TransactionEventType {
    CREATED = "created",
    DELETED = "deleted"
}
export declare class TransactionEvent {
    readonly transaction: TransactionEntity;
    readonly type: TransactionEventType;
    constructor(transaction: TransactionEntity, type: TransactionEventType);
}
