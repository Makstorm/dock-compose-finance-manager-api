import { AccountEntity } from '../../entities';
import { AccountDto, AccountUpdateDto } from '../../models';
export interface IAccountService {
    create(dto: AccountDto): Promise<AccountEntity>;
    delete(id: string): Promise<AccountEntity>;
    getOne(id: string): Promise<AccountEntity>;
    getAll(): Promise<AccountEntity[]>;
    update(id: string, dto: AccountUpdateDto): Promise<AccountEntity>;
}
