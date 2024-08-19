import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	Unique,
	CreateDateColumn,
	UpdateDateColumn,
} from 'typeorm';
import { DepartmentAttributes } from '../interfaces/department.interface';

@Entity({ name: 'departments' })
@Unique(['title'])
export class Department implements DepartmentAttributes {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column({ type: 'varchar', unique: true })
	title!: string;

	@Column({ type: 'varchar' })
	email!: string;

	@Column({ type: 'varchar', nullable: true })
	phone!: string;

	@Column({ type: 'int' })
	user_id!: number;

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
