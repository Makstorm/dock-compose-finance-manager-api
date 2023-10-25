import { Module } from '@nestjs/common';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';
import { AccountEntity, AccountServiceTag } from '@domain';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([AccountEntity])],
  controllers: [AccountController],
  providers: [{ provide: AccountServiceTag, useClass: AccountService }],
  exports: [AccountServiceTag],
})
export class AccountModule {}
