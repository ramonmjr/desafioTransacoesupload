import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('transactions')
class Transaction {
  id: string;

  title: string;

  type: 'income' | 'outcome';

  value: number;

  category_id: string;

  created_at: Date;

  updated_at: Date;
}

export default Transaction;
