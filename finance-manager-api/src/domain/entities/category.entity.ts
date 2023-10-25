import { Column, Entity, OneToMany } from 'typeorm';
import { AbstractEntity } from './abstract.entity';
import { TransactionEntity } from './transaction.entity';

@Entity('category')
export class CategoryEntity extends AbstractEntity {
  @Column()
  public name: string;

  @OneToMany(() => TransactionEntity, (transaction) => transaction.category, {
    onDelete: 'SET NULL',
  })
  public transactions: TransactionEntity[];
}
