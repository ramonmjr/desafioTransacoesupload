import { getCustomRepository, getRepository } from 'typeorm';
// import AppError from '../errors/AppError';

import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';
import Category from '../models/Category';

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
    const categoryRepository = getRepository(Category);
    const findCategory = await categoryRepository.findOne({
      where: { title },
    });

    if (!findCategory) {
      const objectCategory = categoryRepository.create({
        title: category,
      });
      await categoryRepository.save(objectCategory);

      const idCategoria = objectCategory.id;
    } else {
      const idCategoria = findCategory.id;
    }
    const transactionsRepository = getCustomRepository(TransactionsRepository);

    const transaction = transactionsRepository.create({
      title,
      value,
      type,
    });

    await transactionsRepository.save(transaction);

    return transaction;
  }
}

export default CreateTransactionService;
