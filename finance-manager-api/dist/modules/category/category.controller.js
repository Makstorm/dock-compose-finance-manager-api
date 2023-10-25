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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
const _domain_1 = require("../../domain");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
let CategoryController = class CategoryController {
    async create(dto) {
        const entity = await this.service.create(dto);
        return _domain_1.CategoryModel.formEntity(entity);
    }
    async delete(id) {
        const entity = await this.service.delete(id);
        return _domain_1.CategoryModel.formEntity(entity);
    }
    async getStatistics(dto) {
        return await this.service.getStatistics(dto);
    }
    async getOne(id) {
        const entity = await this.service.getOne(id);
        return _domain_1.CategoryModel.formEntity(entity);
    }
    async getAll() {
        const entity = await this.service.getAll();
        return entity.map((e) => _domain_1.CategoryModel.formEntity(e));
    }
    async update(id, dto) {
        const entity = await this.service.update(id, dto);
        return _domain_1.CategoryModel.formEntity(entity);
    }
};
exports.CategoryController = CategoryController;
__decorate([
    (0, common_1.Inject)(_domain_1.CategoryServiceTag),
    __metadata("design:type", Object)
], CategoryController.prototype, "service", void 0);
__decorate([
    (0, swagger_1.ApiResponse)({ type: _domain_1.CategoryModel }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [_domain_1.CategoryDto]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiResponse)({ type: _domain_1.CategoryModel }),
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)('/statistics'),
    (0, swagger_1.ApiResponse)({ type: _domain_1.CategoryStatistic }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [_domain_1.GetStaticDto]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "getStatistics", null);
__decorate([
    (0, swagger_1.ApiResponse)({ type: _domain_1.CategoryModel }),
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "getOne", null);
__decorate([
    (0, swagger_1.ApiResponse)({ type: [_domain_1.CategoryModel] }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "getAll", null);
__decorate([
    (0, swagger_1.ApiResponse)({ type: _domain_1.CategoryModel }),
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, _domain_1.UpdateCategoryDto]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "update", null);
exports.CategoryController = CategoryController = __decorate([
    (0, swagger_1.ApiTags)('Category'),
    (0, common_1.Controller)('category')
], CategoryController);
//# sourceMappingURL=category.controller.js.map