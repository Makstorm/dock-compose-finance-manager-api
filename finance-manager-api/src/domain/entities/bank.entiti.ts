import { Column, Entity, OneToMany } from 'typeorm';
import { AbstractEntity } from './abstract.entity';
import { TransactionEntity } from './transaction.entity';

@Entity('account')
export class AccountEntity extends AbstractEntity {
  @Column()
  public name: string;

  @Column()
  public balance: number;

  @OneToMany(() => TransactionEntity, (transaction) => transaction.account)
  public transactions: TransactionEntity[];
}
