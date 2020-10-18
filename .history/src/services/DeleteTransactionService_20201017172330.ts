import { getCustomRepository } from 'typeorm';
import TransactionRepository from '../repositories/TransactionsRepository';
import AppError from '../errors/AppError';

class DeleteTransactionService {
  public async execute(id): Promise<void> {
    const transactionsRepository = getCustomRepository(TransactionRepository);
    const transaction = transactionsRepository.findOne({
      where: {
        id,
      },
    });

    if (!transaction) throw new AppError('Transaction not Found.', 404);
    const response = transactionsRepository.remove(transaction);
  }
}

export default DeleteTransactionService;
