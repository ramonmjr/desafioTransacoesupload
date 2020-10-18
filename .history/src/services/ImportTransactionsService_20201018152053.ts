import { In, getCustomRepository, getRepository } from 'typeorm';
import csvParse from 'csv-parse';
import fs from 'fs';
import Transaction from '../models/Transaction';
import TransactionsRepository from '../repositories/TransactionsRepository';
import Categories from '../models/Category';

interface CSVTransaction {
  title: string;
  type: 'income' | 'outcome';
  value: number;
  category: string | null;
}

class ImportTransactionsService {
  async execute(filePath: string): Promise<Transaction[]> {
    const contatcsReadStream = fs.createReadStream(filePath);
    const categoriesRepository = getRepository(Categories);
    const transactionsRepository = getCustomRepository(TransactionsRepository);

    const parsers = csvParse({
      from_line: 2,
    });

    const parseCsv = contatcsReadStream.pipe(parsers);

    const transactions: CSVTransaction[] = [];
    const categories: string[] = [];

    parseCsv.on('data', async line => {
      const [title, type, value, category] = line.map((cell: string) =>
        cell.trim(),
      );

      if (!title || !type || !value) return;

      categories.push(category);

      transactions.push({
        title,
        type,
        value,
        category,
      });
    });

    await new Promise(resolve => parseCsv.on('end', resolve));

    const existeCategories = await categoriesRepository.find({
      where: {
        title: In(categories),
      },
    });
  }
}

export default ImportTransactionsService;
