import { Expose } from 'class-transformer';
import { DepartmentAttributes } from '../interfaces/department.interface';

export class DepartmentnDto implements DepartmentAttributes {
	@Expose()
	id!: number;

	@Expose()
	title!: string;

	@Expose()
	email!: string;

	@Expose()
	phone!: string;

	@Expose()
	user_id!: number;

	@Expose()
	created_at!: Date;

	@Expose()
	updated_at!: Date;
}
