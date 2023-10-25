import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';
import { randomUUID } from 'crypto';
import { TransactionType } from '../../../core';

export class TransactionDto {
  @ApiProperty({ type: String, example: randomUUID() })
  public accountId: string;

  @ApiProperty({
    type: Number,
    description: 'Amount of money for your payment',
    example: 500,
  })
  public amount: number;

  @ApiProperty({
    description: 'List of posible variants',
    enum: TransactionType,
    isArray: false,
    example: TransactionType.EXPENCE,
  })
  public type: TransactionType;

  @ApiProperty({
    description: 'Payment description',
    example: 'Bill payment',
    type: String,
  })
  public description: string;

  @ApiProperty({
    description: 'CategoryId',
    type: String,
    example: randomUUID(),
  })
  @IsUUID()
  public categoryId: string;
}
