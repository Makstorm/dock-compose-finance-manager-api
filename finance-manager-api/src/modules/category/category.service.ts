import {
  CategoryEntity,
  CategoryDto,
  GetStaticDto,
  CategoryStatistic,
  ICategoryService,
  TransactionEntity,
} from '@domain';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService implements ICategoryService {
  @InjectRepository(CategoryEntity)
  private readonly repository: Repository<CategoryEntity>;

  public async create(dto: CategoryDto): Promise<CategoryEntity> {
    const categoryEntity = new CategoryEntity();

    categoryEntity.name = dto.name;

    return await this.repository.save(categoryEntity);
  }

  public async delete(id: string): Promise<CategoryEntity> {
    const categoryForDelete = await this.repository.findOne({
      where: { id },
    });

    if (!categoryForDelete) {
      throw new NotFoundException(`Category with id: ${id} does not exist`);
    }

    return await this.repository.remove(categoryForDelete);
  }

  public async getOne(id: string): Promise<CategoryEntity> {
    const category = await this.repository.findOneBy({ id });
    if (!category)
      throw new NotFoundException(`Category with id: ${id} does not exist`);
    return category;
  }

  public async getAll(): Promise<CategoryEntity[]> {
    return await this.repository.find();
  }

  public async update(id: string, dto: CategoryDto): Promise<CategoryEntity> {
    await this.repository.update({ id }, { ...dto });
    return await this.getOne(id);
  }

  public async getStatistics({
    categoryId,
    from,
    to,
  }: GetStaticDto): Promise<CategoryStatistic[]> {
    const queryBuilder = this.repository
      .createQueryBuilder('c')
      .select([
        'c.name AS name',
        'SUM(CASE WHEN t.type = :expence THEN -1 * t.amount ELSE t.amount END) AS balance',
      ])
      .innerJoin(TransactionEntity, 't', 't.categoryId = :categoryId', {
        categoryId,
      })
      .where('c.id = :categoryId', { categoryId })
      .groupBy('c.id')
      .setParameter('expence', 'expence');

    if (from) {
      queryBuilder.andWhere('t.createdAt >= :from', { from });
    }

    if (to) {
      queryBuilder.andWhere('t.createdAt <= :to', { to });
    }
    const results = await queryBuilder
      .getRawMany()
      .then((data) =>
        data.map((e) => ({ name: e.name, balance: Number(e.balance) })),
      );
    return results;
  }
}
