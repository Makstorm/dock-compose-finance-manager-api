import { CategoryEntity, CategoryDto, GetStaticDto, CategoryStatistic, ICategoryService } from '@domain';
export declare class CategoryService implements ICategoryService {
    private readonly repository;
    create(dto: CategoryDto): Promise<CategoryEntity>;
    delete(id: string): Promise<CategoryEntity>;
    getOne(id: string): Promise<CategoryEntity>;
    getAll(): Promise<CategoryEntity[]>;
    update(id: string, dto: CategoryDto): Promise<CategoryEntity>;
    getStatistics({ categoryId, from, to, }: GetStaticDto): Promise<CategoryStatistic[]>;
}
