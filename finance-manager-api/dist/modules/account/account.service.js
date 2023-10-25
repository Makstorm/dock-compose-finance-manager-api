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
exports.AccountService = void 0;
const _domain_1 = require("../../domain");
const common_1 = require("@nestjs/common");
const event_emitter_1 = require("@nestjs/event-emitter");
const typeorm_1 = require("@nestjs/typeorm");
const core_1 = require("../../core");
const typeorm_2 = require("typeorm");
let AccountService = class AccountService {
    async create(dto) {
        const accoutEntity = this.repository.create({ ...dto });
        return await this.repository.save(accoutEntity);
    }
    async delete(id) {
        const accountForDelete = await this.getOne(id);
        return await this.repository.remove(accountForDelete);
    }
    async getOne(id) {
        const account = await this.repository.findOneBy({ id });
        if (!account)
            throw new common_1.NotFoundException(`Account with id: ${id} does not exist`);
        return account;
    }
    async getAll() {
        return await this.repository.find();
    }
    async update(id, dto) {
        await this.repository.update({ id }, { ...dto });
        return await this.getOne(id);
    }
    async recalculateBankBalance(payload) {
        const transactionAmount = payload.transaction.type === core_1.TransactionType.EXPENCE
            ? -payload.transaction.amount
            : payload.transaction.amount;
        const money = payload.type === "deleted"
            ? -transactionAmount
            : transactionAmount;
        const resultParameters = {
            accountId: payload.transaction.accountId,
            money,
        };
        await this.repository
            .createQueryBuilder('bank')
            .update({ balance: () => `balance + :money` })
            .where('id = :accountId')
            .setParameters(resultParameters)
            .execute();
    }
};
exports.AccountService = AccountService;
__decorate([
    (0, typeorm_1.InjectRepository)(_domain_1.AccountEntity),
    __metadata("design:type", typeorm_2.Repository)
], AccountService.prototype, "repository", void 0);
__decorate([
    (0, event_emitter_1.OnEvent)('transaction.created'),
    (0, event_emitter_1.OnEvent)('transaction.deleted'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [_domain_1.TransactionEvent]),
    __metadata("design:returntype", Promise)
], AccountService.prototype, "recalculateBankBalance", null);
exports.AccountService = AccountService = __decorate([
    (0, common_1.Injectable)()
], AccountService);
//# sourceMappingURL=account.service.js.map