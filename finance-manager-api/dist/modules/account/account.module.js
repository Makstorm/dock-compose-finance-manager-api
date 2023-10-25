"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountModule = void 0;
const common_1 = require("@nestjs/common");
const account_controller_1 = require("./account.controller");
const account_service_1 = require("./account.service");
const _domain_1 = require("../../domain");
const typeorm_1 = require("@nestjs/typeorm");
let AccountModule = class AccountModule {
};
exports.AccountModule = AccountModule;
exports.AccountModule = AccountModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([_domain_1.AccountEntity])],
        controllers: [account_controller_1.AccountController],
        providers: [{ provide: _domain_1.AccountServiceTag, useClass: account_service_1.AccountService }],
        exports: [_domain_1.AccountServiceTag],
    })
], AccountModule);
//# sourceMappingURL=account.module.js.map