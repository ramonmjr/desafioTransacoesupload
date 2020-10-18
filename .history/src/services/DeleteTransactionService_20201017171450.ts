import { getCustomRepository } from 'typeorm';
import TransactionRepository from '../repositories/TransactionsRepository';
import AppError from '../errors/AppError';

class DeleteTransactionService {
  public async execute(id): Promise<void> {
    const transactionsRepository = getCustomRepository(TransactionRepository);
    const transaction = transactionsRepository.find({
      where: {
        id,
      },
    });

    if (!transaction) throw new AppError('Transaction not Found.', 404);
  }
}

export default DeleteTransactionService;
