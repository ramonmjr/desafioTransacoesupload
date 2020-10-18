import csvParse from 'csv-parse';
import fs from 'fs';
import Transaction from '../models/Transaction';

class ImportTransactionsService {
  async execute(filePath: string): Promise<Transaction[]> {
    const contatcsReadStream = fs.createReadStream(filePath);
  }
}

export default ImportTransactionsService;
