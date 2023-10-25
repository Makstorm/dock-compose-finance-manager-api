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
exports.AccountEntity = void 0;
const typeorm_1 = require("typeorm");
const abstract_entity_1 = require("./abstract.entity");
const transaction_entity_1 = require("./transaction.entity");
let AccountEntity = class AccountEntity extends abstract_entity_1.AbstractEntity {
};
exports.AccountEntity = AccountEntity;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AccountEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], AccountEntity.prototype, "balance", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => transaction_entity_1.TransactionEntity, (transaction) => transaction.account),
    __metadata("design:type", Array)
], AccountEntity.prototype, "transactions", void 0);
exports.AccountEntity = AccountEntity = __decorate([
    (0, typeorm_1.Entity)('account')
], AccountEntity);
//# sourceMappingURL=bank.entiti.js.map