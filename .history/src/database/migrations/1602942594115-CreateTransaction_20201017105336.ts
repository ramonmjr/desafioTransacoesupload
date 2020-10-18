import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateTransaction1602942594115
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'transactions',
        columns: [],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> { }
}
