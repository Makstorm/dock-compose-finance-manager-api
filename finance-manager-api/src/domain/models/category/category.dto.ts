import { ApiProperty } from '@nestjs/swagger';

export class CategoryDto {
  @ApiProperty({ type: String, description: 'Category name', example: 'Food' })
  public name: string;
}
