import { Type } from '@nestjs/class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsDateString, IsUUID, Validate } from 'class-validator';
import { randomUUID } from 'crypto';

export class GetStaticDto {
  @ApiProperty({
    type: String,
    example: randomUUID(),
  })
  @IsUUID()
  @IsArray()
  public categoryId: string;

  @ApiProperty({ type: Date, example: '2023-03-01T12:34:56.789Z' })
  @IsDateString()
  @Validate((value) => new Date(value).toString() !== 'Invalid Date')
  @Type(() => Date)
  public from: Date;

  @ApiProperty({ type: Date, example: '2023-03-13T12:34:56.789Z' })
  @IsDateString()
  @Validate((value) => new Date(value).toString() !== 'Invalid Date')
  @Type(() => Date)
  public to: Date;
}
