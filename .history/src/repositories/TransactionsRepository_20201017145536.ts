import { EntityRepository, Repository } from 'typeorm';

import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

@EntityRepository(Transaction)
class TransactionsRepository extends Repository<Transaction> {
  public async getBalance(): Promise<void> {
    const transactions = await this.find();

    const balance = transactions.reduce((accumulator, transaction) => { }, {
      income: 0,
      outcome: 0,
      total: 0,
    });
  }
}

export default TransactionsRepository;
