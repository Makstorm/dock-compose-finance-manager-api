import {
  AccountEntity,
  CategoryServiceTag,
  ICategoryService,
  ILoggingService,
  ITransactionService,
  LoggingPaymentDto,
  LoggingServiceTag,
  TransactionDto,
  TransactionEntity,
  TransactionEvent,
  TransactionEventType,
} from '@domain';
import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TransactionService implements ITransactionService {
  public constructor(private eventEmitter: EventEmitter2) {}

  @InjectRepository(TransactionEntity)
  private readonly repository: Repository<TransactionEntity>;

  @InjectRepository(AccountEntity)
  private readonly accountRepository: Repository<AccountEntity>;

  @Inject(CategoryServiceTag)
  private readonly categoryService: ICategoryService;

  @Inject(LoggingServiceTag) private readonly logService: ILoggingService;

  public async create(dto: TransactionDto): Promise<TransactionEntity> {
    const transactionEntity = new TransactionEntity();

    transactionEntity.amount = dto.amount;
    transactionEntity.type = dto.type;

    const account = await this.accountRepository.findOneBy({
      id: dto.accountId,
    });

    if (!account) {
      throw new BadRequestException(
        `There is no account with id: ${dto.accountId}`,
      );
    }
    transactionEntity.accountId = dto.accountId;

    transactionEntity.moneyLeft =
      dto.type === 'income'
        ? account.balance + dto.amount
        : account.balance - dto.amount;

    const category = await this.categoryService.getOne(dto.categoryId);

    transactionEntity.categoryId = dto.categoryId;

    const savedTransaction = await this.repository.save(transactionEntity);

    // Emmiting balance reculculation event
    await this.emitingAccountEvent(
      savedTransaction,
      TransactionEventType.CREATED,
    );

    const loggPaymentDto = new LoggingPaymentDto(
      savedTransaction.type,
      category.name,
      savedTransaction.createdAt,
      savedTransaction.amount,
    );

    this.logService.logPaymentAction(loggPaymentDto);

    return savedTransaction;
  }
  public async delete(id: string): Promise<TransactionEntity> {
    const transactionForDelete = await this.repository.findOneBy({ id });
    const deletedEntity = await this.repository.remove(transactionForDelete);

    // Emmiting balance reculculation event
    await this.emitingAccountEvent(
      transactionForDelete,
      TransactionEventType.DELETED,
    );
    return deletedEntity;
  }
  public async getAll(): Promise<TransactionEntity[]> {
    return await this.repository.find();
  }

  private async emitingAccountEvent(
    transaction: TransactionEntity,
    type: TransactionEventType,
  ): Promise<void> {
    this.eventEmitter.emit(
      'transaction.' + type,
      new TransactionEvent(transaction, type),
    );
  }
}
