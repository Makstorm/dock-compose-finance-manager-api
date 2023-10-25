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
exports.TransactionModel = void 0;
const _domain_1 = require("../..");
const swagger_1 = require("@nestjs/swagger");
const crypto_1 = require("crypto");
const core_1 = require("../../../core");
class TransactionModel {
    static formEntity(transaction) {
        if (!transaction) {
            return null;
        }
        const model = new TransactionModel();
        model.id = transaction.id;
        model.type = transaction.type;
        model.amount = transaction.amount;
        return model;
    }
}
exports.TransactionModel = TransactionModel;
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: (0, crypto_1.randomUUID)() }),
    __metadata("design:type", String)
], TransactionModel.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: core_1.TransactionType.EXPENCE }),
    __metadata("design:type", String)
], TransactionModel.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number, example: 1000 }),
    __metadata("design:type", Number)
], TransactionModel.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'Description of this payment',
        example: 'Bill payment',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [_domain_1.TransactionEntity]),
    __metadata("design:returntype", TransactionModel)
], TransactionModel, "formEntity", null);
//# sourceMappingURL=transaction.model.js.map