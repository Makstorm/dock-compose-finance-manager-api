import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule, TransactionModule, AccountModule } from './modules';
import * as _entities from './domain/entities';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
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
    EventEmitterModule.forRoot(),
    // WinstonModule.forRoot({
    //   format: winston.format.json(),
    //   transports: [
    //     new winston.transports.File({
    //       dirname: path.join(__dirname, './../log/info/'),
    //       filename: 'payments.log',
    //       level: 'info',
    //     }),
    //   ],
    // }),
    CategoryModule,
    TransactionModule,
    AccountModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
