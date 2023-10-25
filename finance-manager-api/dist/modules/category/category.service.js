"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const _domain_1 = require("../../domain");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let CategoryService = class CategoryService {
    async create(dto) {
        const categoryEntity = new _domain_1.CategoryEntity();
        categoryEntity.name = dto.name;
        return await this.repository.save(categoryEntity);
    }
    async delete(id) {
        const categoryForDelete = await this.repository.findOne({
            where: { id },
        });
        if (!categoryForDelete) {
            throw new common_1.NotFoundException(`Category with id: ${id} does not exist`);
        }
        return await this.repository.remove(categoryForDelete);
    }
    async getOne(id) {
        const category = await this.repository.findOneBy({ id });
        if (!category)
            throw new common_1.NotFoundException(`Category with id: ${id} does not exist`);
        return category;
    }
    async getAll() {
        return await this.repository.find();
    }
    async update(id, dto) {
        await this.repository.update({ id }, { ...dto });
        return await this.getOne(id);
    }
    async getStatistics({ categoryId, from, to, }) {
        const queryBuilder = this.repository
            .createQueryBuilder('c')
            .select([
            'c.name AS name',
            'SUM(CASE WHEN t.type = :expence THEN -1 * t.amount ELSE t.amount END) AS balance',
        ])
            .innerJoin(_domain_1.TransactionEntity, 't', 't.categoryId = :categoryId', {
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
            .then((data) => data.map((e) => ({ name: e.name, balance: Number(e.balance) })));
        return results;
    }
};
exports.CategoryService = CategoryService;
__decorate([
    (0, typeorm_1.InjectRepository)(_domain_1.CategoryEntity),
    __metadata("design:type", typeorm_2.Repository)
], CategoryService.prototype, "repository", void 0);
exports.CategoryService = CategoryService = __decorate([
    (0, common_1.Injectable)()
], CategoryService);
//# sourceMappingURL=category.service.js.map