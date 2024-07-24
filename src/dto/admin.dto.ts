import { Expose, Transform } from 'class-transformer';
import { AdminAttributes } from '../interfaces/admin.interface';
import { env } from '@/configs';

export class AdminDto implements AdminAttributes {
	@Expose()
	id!: number;

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
	@Transform(({ value }) => {
		if (!value) return;

		return env.app.url + value;
	})
	avatar!: string;

	@Expose()
	role!: number;

	@Expose()
	status!: number;

	@Expose()
	created_at!: Date;

	@Expose()
	updated_at!: Date;
}
