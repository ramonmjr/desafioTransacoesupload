import csvParse from 'csv-parse';
import fs from 'fs';
import Transaction from '../models/Transaction';

class ImportTransactionsService {
  async executeat(filePath: string): Promise<Transaction[]> {
    // TODO
  }
}

export default ImportTransactionsService;
