import csvParse from 'csv-parse';
import fs from 'fs';
import Transaction from '../models/Transaction';

class ImportTransactionsService {
  async execute(filePath: string): Promise<Transaction[]> {
    const contatcsReadStream = fs.createReadStream(filePath);
    const parsers = csvParse({
      from_line: 2,
    });
    const parseCsv = contatcsReadStream.pipe(parsers);

    parseCsv.on('data', async line => {
      const [title, type, value, category] = line.map((cell: string)) => cell.trim()
    })
  }
}

export default ImportTransactionsService;
