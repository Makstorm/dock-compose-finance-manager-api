import { AccountEntity } from '@domain';
export declare class AccountModel {
    id: string;
    name: string;
    balance: number;
    static formEntity(bank: AccountEntity): AccountModel;
}
