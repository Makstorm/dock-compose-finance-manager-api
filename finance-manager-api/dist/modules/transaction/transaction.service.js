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
exports.TransactionService = void 0;
const _domain_1 = require("../../domain");
const common_1 = require("@nestjs/common");
const event_emitter_1 = require("@nestjs/event-emitter");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let TransactionService = class TransactionService {
    constructor(eventEmitter) {
        this.eventEmitter = eventEmitter;
    }
    async create(dto) {
        const transactionEntity = new _domain_1.TransactionEntity();
        transactionEntity.amount = dto.amount;
        transactionEntity.type = dto.type;
        const account = await this.accountRepository.findOneBy({
            id: dto.accountId,
        });
        if (!account) {
            throw new common_1.BadRequestException(`There is no account with id: ${dto.accountId}`);
        }
        transactionEntity.accountId = dto.accountId;
        transactionEntity.moneyLeft =
            dto.type === 'income'
                ? account.balance + dto.amount
                : account.balance - dto.amount;
        const category = await this.categoryService.getOne(dto.categoryId);
        transactionEntity.categoryId = dto.categoryId;
        const savedTransaction = await this.repository.save(transactionEntity);
        await this.emitingAccountEvent(savedTransaction, "created");
        const loggPaymentDto = new _domain_1.LoggingPaymentDto(savedTransaction.type, category.name, savedTransaction.createdAt, savedTransaction.amount);
        this.logService.logPaymentAction(loggPaymentDto);
        return savedTransaction;
    }
    async delete(id) {
        const transactionForDelete = await this.repository.findOneBy({ id });
        const deletedEntity = await this.repository.remove(transactionForDelete);
        await this.emitingAccountEvent(transactionForDelete, "deleted");
        return deletedEntity;
    }
    async getAll() {
        return await this.repository.find();
    }
    async emitingAccountEvent(transaction, type) {
        this.eventEmitter.emit('transaction.' + type, new _domain_1.TransactionEvent(transaction, type));
    }
};
exports.TransactionService = TransactionService;
__decorate([
    (0, typeorm_1.InjectRepository)(_domain_1.TransactionEntity),
    __metadata("design:type", typeorm_2.Repository)
], TransactionService.prototype, "repository", void 0);
__decorate([
    (0, typeorm_1.InjectRepository)(_domain_1.AccountEntity),
    __metadata("design:type", typeorm_2.Repository)
], TransactionService.prototype, "accountRepository", void 0);
__decorate([
    (0, common_1.Inject)(_domain_1.CategoryServiceTag),
    __metadata("design:type", Object)
], TransactionService.prototype, "categoryService", void 0);
__decorate([
    (0, common_1.Inject)(_domain_1.LoggingServiceTag),
    __metadata("design:type", Object)
], TransactionService.prototype, "logService", void 0);
exports.TransactionService = TransactionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [event_emitter_1.EventEmitter2])
], TransactionService);
//# sourceMappingURL=transaction.service.js.map