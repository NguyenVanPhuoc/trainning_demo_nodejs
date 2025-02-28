import { AdminDto } from '@/dto/admin.dto';
import { BaseService } from './base.service';
import { Admin } from '@/entities/admin';
import { Like } from 'typeorm';
import { UserPayload } from '@/interfaces/auth.interface';
import { AppError } from '@/utils/errror.util';
import { trans } from '@/utils/translation.util';
import { HttpStatusCode } from 'axios';
import { compareHash, generateRandomPassword } from '@/utils/encryption.util';
import { env } from '@/configs';
import { AdminAttributes } from '@/interfaces/admin.interface';
import { isTrueSet } from '@/utils/string.util';
import { Status } from '@/constants/status.constant';
import DataSource from '@/database/datasource';

export class AdminService extends BaseService<Admin> {
	constructor() {
		const adminRepository = DataSource.getRepository(Admin);
		super(adminRepository, AdminDto);
	}

    public async login(
		email: string,
		password: string,
		expiresIn: number,
	): Promise<UserPayload> {
		const admin = await this.findOne({ email });

		if (!admin) {
			throw new AppError(
				trans('email.mismatch', {}, 'errors'),
				HttpStatusCode.Forbidden,
			);
		}

		const isMatch = compareHash(password, admin.password);

		if (!isMatch) {
			throw new AppError(
				trans('password.invalid', {}, 'errors'),
				HttpStatusCode.Forbidden,
			);
		}

		if (!admin.status) {
			throw new AppError(
				trans('status.inactive', {}, 'errors'),
				HttpStatusCode.Forbidden,
			);
		}

		return {
			id: admin.id,
			email: admin.email,
			username: admin.username,
			full_name: admin?.full_name,
			avatar: admin?.avatar ? env.app.url + admin?.avatar : '',
			expires: expiresIn,
		};
	}

	public async getListAccountAdmin(
		keyword: string,
		status: number | null,
	) {
		const searchTerm = Like(`%${keyword}%`);
		let conditions = {};

		if (keyword) {
			conditions = [
				{
					status,
					full_name: searchTerm,
				},
				{
					status,
					username: searchTerm,
				},
				{
					status,
					email: searchTerm,
				},
			];
		} else {
			conditions = { status };
		}

		return await this.all(conditions, {
			id: 'DESC',
		});
	}
	private async ensureUniqueField(fieldName: keyof AdminAttributes, value: string): Promise<void> {
		const fieldCheck = await this.findOne({ [fieldName]: value });
		if (fieldCheck) {
		  throw new AppError(
			trans(`${fieldName}.unique`, {}, 'errors'),
			HttpStatusCode.Unauthorized
		  );
		}
	  }
	  
	  async createAdmin(adminData: AdminAttributes): Promise<Admin | null> {
		try {
		  // Check if username is unique
		  await this.ensureUniqueField('username', adminData.username);
	  
		  // Check if email is unique
		  await this.ensureUniqueField('email', adminData.email);
	  
		  // Set status
		  adminData.status = isTrueSet(adminData.status as unknown as string)
			? Status.ACTIVE
			: Status.INACTIVE;
	  
		  // Generate random password if not provided
		  if (!adminData.password) {
			const randomPassword = generateRandomPassword(8);
			adminData.password = randomPassword;
		  }
	  
		  //Set birth_date to null if not provided
		  if (!adminData.birth_date) {
			adminData.birth_date = null;
		  }
	  
		  // Create admin account
		  const account = await this.create(adminData as AdminAttributes);
		  return account;
		} catch (error: any) {
		  // Provide a meaningful error message
		  throw new AppError(
			error.message || trans('admin.error.error_page_create', {}, 'translation'),
			HttpStatusCode.BadRequest
		  );
		}
	}
	  
	  
}
