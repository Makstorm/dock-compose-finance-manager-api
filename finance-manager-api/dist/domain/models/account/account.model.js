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
exports.AccountModel = void 0;
const swagger_1 = require("@nestjs/swagger");
const crypto_1 = require("crypto");
class AccountModel {
    static formEntity(bank) {
        if (!bank) {
            return null;
        }
        const model = new AccountModel();
        model.id = bank.id;
        model.name = bank.name;
        model.balance = bank.balance;
        return model;
    }
}
exports.AccountModel = AccountModel;
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: (0, crypto_1.randomUUID)() }),
    __metadata("design:type", String)
], AccountModel.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: 'Monobank-BlackCard' }),
    __metadata("design:type", String)
], AccountModel.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number, example: 1000 }),
    __metadata("design:type", Number)
], AccountModel.prototype, "balance", void 0);
//# sourceMappingURL=account.model.js.map