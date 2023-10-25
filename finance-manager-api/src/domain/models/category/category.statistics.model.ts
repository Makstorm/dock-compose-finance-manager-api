import { ApiProperty } from '@nestjs/swagger';

export class CategoryStatistic {
  @ApiProperty({ type: String, example: 'category_name' })
  public name: string;

  @ApiProperty({ type: Number, example: -1000 })
  public balance: number;
}
