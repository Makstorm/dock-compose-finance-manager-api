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
exports.TransactionDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const crypto_1 = require("crypto");
const core_1 = require("../../../core");
class TransactionDto {
}
exports.TransactionDto = TransactionDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: (0, crypto_1.randomUUID)() }),
    __metadata("design:type", String)
], TransactionDto.prototype, "accountId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        description: 'Amount of money for your payment',
        example: 500,
    }),
    __metadata("design:type", Number)
], TransactionDto.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'List of posible variants',
        enum: core_1.TransactionType,
        isArray: false,
        example: core_1.TransactionType.EXPENCE,
    }),
    __metadata("design:type", String)
], TransactionDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Payment description',
        example: 'Bill payment',
        type: String,
    }),
    __metadata("design:type", String)
], TransactionDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'CategoryId',
        type: String,
        example: (0, crypto_1.randomUUID)(),
    }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], TransactionDto.prototype, "categoryId", void 0);
//# sourceMappingURL=transaction.dto.js.map