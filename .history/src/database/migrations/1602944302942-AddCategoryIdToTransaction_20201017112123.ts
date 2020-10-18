import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export default class AddCategoryIdToTransaction1602944302942
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> { }

  public async down(queryRunner: QueryRunner): Promise<void> { }
}
