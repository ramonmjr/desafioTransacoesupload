// import AppError from '../errors/AppError';
import { getCustomRepository } from 'typeorm';

import TransactionsRepositowy from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
  category: string;
}

class CreateTransactionService {
  public async execute({
    title,
    value,
    type,
    category,
  }: Request): Promise<Transaction> {
    const trasactionRepository = getCustomRepository(Transaction);
  }
}

export default CreateTransactionService;
