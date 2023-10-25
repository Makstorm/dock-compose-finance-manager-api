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
exports.TransactionController = void 0;
const _domain_1 = require("../../domain");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
let TransactionController = class TransactionController {
    async create(dto) {
        const entity = await this.service.create(dto);
        return _domain_1.TransactionModel.formEntity(entity);
    }
    async getAll() {
        const transaction = await this.service.getAll();
        return transaction.map((e) => _domain_1.TransactionModel.formEntity(e));
    }
    async delete(id) {
        const entity = await this.service.delete(id);
        return _domain_1.TransactionModel.formEntity(entity);
    }
};
exports.TransactionController = TransactionController;
__decorate([
    (0, common_1.Inject)(_domain_1.TransactionServiceTag),
    __metadata("design:type", Object)
], TransactionController.prototype, "service", void 0);
__decorate([
    (0, swagger_1.ApiResponse)({ type: _domain_1.TransactionModel }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [_domain_1.TransactionDto]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiResponse)({ type: [_domain_1.TransactionModel] }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "getAll", null);
__decorate([
    (0, swagger_1.ApiResponse)({ type: _domain_1.TransactionModel }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "delete", null);
exports.TransactionController = TransactionController = __decorate([
    (0, swagger_1.ApiTags)('Payments'),
    (0, common_1.Controller)('transaction')
], TransactionController);
//# sourceMappingURL=transaction.controller.js.map