import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateAdminsTable1709175267128 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'admins',
				columns: [
					{
						name: 'id',
						type: 'bigint',
						isPrimary: true,
						isGenerated: true,
						generationStrategy: 'increment',
					},
					{
						name: 'username',
						type: 'varchar',
						length: '255',
						isNullable: false,
						isUnique: false,
					},
					{
						name: 'email',
						type: 'varchar',
						length: '255',
						isNullable: false,
						isUnique: true,
					},
					{
						name: 'password',
						type: 'varchar',
						length: '255',
						isNullable: false,
					},
					{
						name: 'full_name',
						type: 'varchar',
						length: '255',
						isNullable: true,
					},
					{
						name: 'address',
						type: 'varchar',
						length: '255',
						isNullable: true,
					},
					{
						name: 'phone',
						type: 'varchar',
						length: '255',
						isNullable: true,
					},
					{
						name: 'birth_date',
						type: 'date',
						isNullable: true,
					},
					{
						name: 'avatar',
						type: 'varchar',
						isNullable: true,
					},
					{
						name: 'role',
						type: 'integer',
						isNullable: false,
					},
					{
						name: 'status',
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
		await queryRunner.dropTable('admins');
	}
}
