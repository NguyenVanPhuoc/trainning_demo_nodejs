import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	Unique,
	CreateDateColumn,
	UpdateDateColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import { AdminAttributes } from '../interfaces/admin.interface';
import { transformerPassword } from '../utils/encryption.util';

@Entity({ name: 'admins' })
@Unique(['email'])
export class Admin implements AdminAttributes {
	@PrimaryGeneratedColumn()
	id!: string;

	@Column({ type: 'varchar' })
	username!: string;

	@Column({ type: 'varchar', unique: true })
	email!: string;

	@Column({
		type: 'varchar',
		transformer: transformerPassword,
		nullable: false,
	})
	@Exclude()
	password!: string;

	@Column({ type: 'varchar', nullable: true })
	full_name!: string;

	@Column({ type: 'varchar', nullable: true })
	address!: string;

	@Column({ type: 'varchar', nullable: true })
	phone!: string;

	@Column({ type: 'date', nullable: true })
	birth_date!: string | null;

	@Column({ type: 'varchar', nullable: true })
	avatar!: string;

	@Column({ type: 'int' })
	status!: number;

	@CreateDateColumn({
		type: 'timestamp',
		nullable: false,
	})
	created_at!: Date;

	@UpdateDateColumn({
		type: 'timestamp',
		nullable: false,
	})
	updated_at!: Date;
}