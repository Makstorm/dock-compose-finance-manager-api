import { Module } from '@nestjs/common';
import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';
import {
  AccountEntity,
  TransactionServiceTag,
  TransactionEntity,
} from '@domain';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from '../category';
import { LoggingModule } from '../logging';

@Module({
  imports: [
    TypeOrmModule.forFeature([TransactionEntity, AccountEntity]),
    CategoryModule,
    LoggingModule,
  ],
  controllers: [TransactionController],
  providers: [{ provide: TransactionServiceTag, useClass: TransactionService }],
  exports: [TransactionServiceTag],
})
export class TransactionModule {}
