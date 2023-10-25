import { ApiProperty } from '@nestjs/swagger';

export class AccountUpdateDto {
  @ApiProperty({
    type: String,
    description: 'Updated accoun name',
    example: 'Monobank updatet-black-card',
  })
  public name: string;
}
