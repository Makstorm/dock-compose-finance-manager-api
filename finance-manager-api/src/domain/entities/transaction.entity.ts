import { TransactionType } from 'src/core';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { AbstractEntity } from './abstract.entity';
import { AccountEntity } from './bank.entiti';
import { CategoryEntity } from './category.entity';

@Entity('transaction')
export class TransactionEntity extends AbstractEntity {
  @Column()
  public amount: number;

  @Column({ nullable: true })
  public description: string;

  @Column({
    type: 'enum',
    enum: TransactionType,
    default: TransactionType.EXPENCE,
  })
  public type: TransactionType;

  @ManyToOne(() => AccountEntity, (account) => account.transactions, {
    cascade: true,
  })
  @JoinColumn({ name: 'bankId' })
  public account: AccountEntity;

  @Column()
  public accountId: string;

  @Column()
  public moneyLeft: number;

  @ManyToOne(() => CategoryEntity, (category) => category.transactions, {
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'categoryId' })
  public category: CategoryEntity;

  @Column({ nullable: true })
  public categoryId: string;
}
