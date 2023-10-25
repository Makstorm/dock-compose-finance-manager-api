import { AccountDto, AccountModel, AccountUpdateDto } from '@domain';
export declare class AccountController {
    private readonly service;
    create(dto: AccountDto): Promise<AccountModel>;
    delete(id: string): Promise<AccountModel>;
    getOne(id: string): Promise<AccountModel>;
    getAll(): Promise<AccountModel[]>;
    edit(id: string, dto: AccountUpdateDto): Promise<AccountModel>;
}
