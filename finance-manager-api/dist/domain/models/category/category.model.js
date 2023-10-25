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
exports.CategoryModel = void 0;
const swagger_1 = require("@nestjs/swagger");
const crypto_1 = require("crypto");
class CategoryModel {
    static formEntity(category) {
        if (!category) {
            return null;
        }
        const model = new CategoryModel();
        model.id = category.id;
        model.name = category.name;
        return model;
    }
}
exports.CategoryModel = CategoryModel;
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: (0, crypto_1.randomUUID)() }),
    __metadata("design:type", String)
], CategoryModel.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, description: 'Category name', example: 'food' }),
    __metadata("design:type", String)
], CategoryModel.prototype, "name", void 0);
//# sourceMappingURL=category.model.js.map