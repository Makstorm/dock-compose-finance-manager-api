import { AccountEntity } from '@domain';
import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';

export class AccountModel {
  @ApiProperty({ type: String, example: randomUUID() })
  public id: string;

  @ApiProperty({ type: String, example: 'Monobank-BlackCard' })
  public name: string;

  @ApiProperty({ type: Number, example: 1000 })
  public balance: number;

  public static formEntity(bank: AccountEntity): AccountModel {
    if (!bank) {
      return null;
    }
    const model = new AccountModel();
    model.id = bank.id;
    model.name = bank.name;
    model.balance = bank.balance;

    return model;
  }
}
