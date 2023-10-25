import { AccountDto, AccountEntity, AccountUpdateDto, IAccountService, TransactionEvent } from '@domain';
export declare class AccountService implements IAccountService {
    private readonly repository;
    create(dto: AccountDto): Promise<AccountEntity>;
    delete(id: string): Promise<AccountEntity>;
    getOne(id: string): Promise<AccountEntity>;
    getAll(): Promise<AccountEntity[]>;
    update(id: string, dto: AccountUpdateDto): Promise<AccountEntity>;
    recalculateBankBalance(payload: TransactionEvent): Promise<void>;
}
