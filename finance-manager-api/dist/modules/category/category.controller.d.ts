import { CategoryDto, CategoryModel, CategoryStatistic, GetStaticDto, UpdateCategoryDto } from '@domain';
export declare class CategoryController {
    private readonly service;
    create(dto: CategoryDto): Promise<CategoryModel>;
    delete(id: string): Promise<CategoryModel>;
    getStatistics(dto: GetStaticDto): Promise<CategoryStatistic[]>;
    getOne(id: string): Promise<CategoryModel>;
    getAll(): Promise<CategoryModel[]>;
    update(id: string, dto: UpdateCategoryDto): Promise<CategoryModel>;
}
