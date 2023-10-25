import {
  AccountDto,
  AccountEntity,
  AccountUpdateDto,
  IAccountService,
  TransactionEvent,
  TransactionEventType,
} from '@domain';
import { Injectable, NotFoundException } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { InjectRepository } from '@nestjs/typeorm';
import { TransactionType } from '../../core';
import { Repository } from 'typeorm';

@Injectable()
export class AccountService implements IAccountService {
  @InjectRepository(AccountEntity)
  private readonly repository: Repository<AccountEntity>;

  public async create(dto: AccountDto): Promise<AccountEntity> {
    const accoutEntity = this.repository.create({ ...dto });
    return await this.repository.save(accoutEntity);
  }

  public async delete(id: string): Promise<AccountEntity> {
    const accountForDelete = await this.getOne(id);

    return await this.repository.remove(accountForDelete);
  }

  public async getOne(id: string): Promise<AccountEntity> {
    const account = await this.repository.findOneBy({ id });
    if (!account)
      throw new NotFoundException(`Account with id: ${id} does not exist`);
    return account;
  }

  public async getAll(): Promise<AccountEntity[]> {
    return await this.repository.find();
  }

  public async update(
    id: string,
    dto: AccountUpdateDto,
  ): Promise<AccountEntity> {
    await this.repository.update({ id }, { ...dto });
    return await this.getOne(id);
  }

  @OnEvent('transaction.created')
  @OnEvent('transaction.deleted')
  public async recalculateBankBalance(
    payload: TransactionEvent,
  ): Promise<void> {
    const transactionAmount =
      payload.transaction.type === TransactionType.EXPENCE
        ? -payload.transaction.amount
        : payload.transaction.amount;
    const money =
      payload.type === TransactionEventType.DELETED
        ? -transactionAmount
        : transactionAmount;

    const resultParameters = {
      accountId: payload.transaction.accountId,
      money,
    };

    await this.repository
      .createQueryBuilder('bank')
      .update({ balance: () => `balance + :money` })
      .where('id = :accountId')
      .setParameters(resultParameters)
      .execute();
  }
}
