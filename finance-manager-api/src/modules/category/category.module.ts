import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { CategoryEntity, CategoryServiceTag } from '@domain';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryEntity])],
  controllers: [CategoryController],
  providers: [{ provide: CategoryServiceTag, useClass: CategoryService }],
  exports: [CategoryServiceTag],
})
export class CategoryModule {}
