import { CategoryEntity } from '@domain';
export declare class CategoryModel {
    id: string;
    name: string;
    static formEntity(category: CategoryEntity): CategoryModel;
}
