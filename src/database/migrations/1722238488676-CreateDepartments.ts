import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateDepartments1722238488676 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'departments',
				columns: [
					{
						name: 'id',
						type: 'bigint',
						isPrimary: true,
						isGenerated: true,
						generationStrategy: 'increment',
					},
					{
						name: 'title',
						type: 'varchar',
						length: '255',
						isNullable: false,
						isUnique: false,
					},
					{
						name: 'email',
						type: 'varchar',
						length: '255',
						isNullable: true,
						isUnique: true,
					},
					{
						name: 'phone',
						type: 'varchar',
						length: '255',
						isNullable: true,
					},
					{
						name: 'user_id',
						type: 'integer',
						isNullable: false,
					},
					{
						name: 'created_at',
						type: 'timestamp',
						default: 'now()',
					},
					{
						name: 'updated_at',
						type: 'timestamp',
						default: 'now()',
					},
				],
			}),
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('departments');
	}
}
