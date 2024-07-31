import { DepartmentnDto } from '@/dto';
import { BaseService } from './base.service';
import { Department } from '@/entities/department';
import { Like } from 'typeorm';
import DataSource from '@/database/datasource';

export class DepartmentService extends BaseService<Department> {
	constructor() {
		const departmentRepository = DataSource.getRepository(Department);
		super(departmentRepository, DepartmentnDto);
	}

	public async getList(keyword: string | null) {
		const searchTerm = Like(`%${keyword}%`);
		let conditions = {};

		if (keyword) {
			conditions = [
				{
					title: searchTerm,
				},
				{
					email: searchTerm,
				},
			];
		}

		return await this.all(conditions, {
			id: 'DESC',
		});
	}
}
