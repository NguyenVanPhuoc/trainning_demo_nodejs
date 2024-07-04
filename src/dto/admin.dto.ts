import { Expose } from 'class-transformer';
import { AdminAttributes } from '../interfaces/admin.interface';

export class AdminDto implements AdminAttributes {
	@Expose()
	id!: string;

	@Expose()
	username!: string;

	@Expose()
	email!: string;

	password!: string;

	@Expose()
	full_name!: string;

	@Expose()
	address!: string;

	@Expose()
	phone!: string;

	@Expose()
	birth_date!: string;

	@Expose()
	avatar!: string;

	@Expose()
	status!: number;

	@Expose()
	created_at!: Date;

	@Expose()
	updated_at!: Date;
}