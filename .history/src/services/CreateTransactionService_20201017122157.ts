import AppError from '../errors/AppError';
import Transaction from '../models/Transaction';

interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
  category;
}

class CreateTransactionService {
  public async execute(): Promise<Transaction> { }
}

export default CreateTransactionService;
