import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsPositive } from 'class-validator';

export class AccountDto {
  @ApiProperty({
    type: String,
    description: 'Account name',
    example: 'Monobank black-card',
  })
  @IsNotEmpty()
  public name: string;

  @ApiProperty({
    type: Number,
    description: 'Initial balance value',
    example: 0,
  })
  @IsPositive()
  public balance: number;
}
