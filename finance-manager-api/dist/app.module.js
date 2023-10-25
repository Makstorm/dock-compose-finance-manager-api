"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const modules_1 = require("./modules");
const _entities = require("./domain/entities");
const event_emitter_1 = require("@nestjs/event-emitter");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            typeorm_1.TypeOrmModule.forRootAsync({
                inject: [config_1.ConfigService],
                useFactory: (config) => {
                    const entitiesArray = Object.values(_entities);
                    return {
                        type: 'postgres',
                        host: config.getOrThrow('DB_HOST'),
                        port: config.getOrThrow('DB_PORT'),
                        username: config.getOrThrow('DB_USER'),
                        password: config.getOrThrow('DB_PASSWORD'),
                        database: config.getOrThrow('DB_NAME'),
                        entities: entitiesArray,
                        synchronize: true,
                    };
                },
            }),
            event_emitter_1.EventEmitterModule.forRoot(),
            modules_1.CategoryModule,
            modules_1.TransactionModule,
            modules_1.AccountModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map