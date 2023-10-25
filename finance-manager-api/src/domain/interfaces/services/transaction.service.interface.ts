import { TransactionEntity } from 'src/domain/entities';
import { TransactionDto } from '../../models';

export interface ITransactionService {
  create(dto: TransactionDto): Promise<TransactionEntity>;
  delete(id: string): Promise<TransactionEntity>;
  getAll(): Promise<TransactionEntity[]>;
}
