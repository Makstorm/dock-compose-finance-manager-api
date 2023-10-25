import { ApiProperty } from '@nestjs/swagger';

export class UpdateCategoryDto {
  @ApiProperty({ type: String, description: 'Category name', example: 'Food' })
  public name: string;
}
