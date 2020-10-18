import { getCustomRepository } from 'typeorm';
import TransactionRepository from '../repositories/TransactionsRepository';
import AppError from '../errors/AppError';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    console.log(id);
    const transactionsRepository = getCustomRepository(TransactionRepository);

    const transaction = transactionsRepository.findOne(id);

    if (!transaction) {
      throw new AppError('Transaction not Found.');
    }

    await transactionsRepository.delete(id);
  }
}

export default DeleteTransactionService;
