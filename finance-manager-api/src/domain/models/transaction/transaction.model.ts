import { TransactionEntity } from '@domain';
import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { TransactionType } from '../../../core';

export class TransactionModel {
  @ApiProperty({ type: String, example: randomUUID() })
  public id: string;

  @ApiProperty({ type: String, example: TransactionType.EXPENCE })
  public type: string;

  @ApiProperty({ type: Number, example: 1000 })
  public amount: number;

  @ApiProperty({
    type: String,
    description: 'Description of this payment',
    example: 'Bill payment',
  })
  public static formEntity(transaction: TransactionEntity): TransactionModel {
    if (!transaction) {
      return null;
    }
    const model = new TransactionModel();
    model.id = transaction.id;
    model.type = transaction.type;
    model.amount = transaction.amount;

    return model;
  }
}
