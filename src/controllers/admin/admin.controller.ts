import { NextFunction, Request, Response } from 'express';
import { apiSuccess } from '@/utils/response.util';
import { trans } from '@/utils/translation.util';
import { AdminService } from '@/services/admin.service';
import { TypeUpdateAdmin } from '@/constants/common.constant';
import { AdminDto, plainObject } from '@/dto';

const service = new AdminService();

export default class AdminController {
	public async getList(
		req: Request,
		res: Response,
		next: NextFunction,
	): Promise<void> {
		try {
			const { keyword, status } = req.query;
			const response = await service.getListAccountAdmin(
				keyword ? String(keyword) : '',
				status ? Number(status) : null,
			);

			return apiSuccess(res, next, response, trans('success'));
		} catch (error) {
			next(error);
		}
	}

	public async store(
		req: Request,
		res: Response,
		next: NextFunction,
	): Promise<void> {
		try {
			const params = req.body;
			if (req.file) {
				params.avatar = req.file?.filename;
			}

			const account = await service.createAdmin(params);

			return apiSuccess(res, next, account, trans('success'));
		} catch (error) {
			next(error);
		}
	}

	public async edit(
		req: Request,
		res: Response,
		next: NextFunction,
	): Promise<void> {
		try {
			const { id } = req.params;
			const adminId: number = parseInt(id, 10);

			const admin = await service.find(adminId);

			return apiSuccess(
				res,
				next,
				plainObject(AdminDto, admin, true),
				trans('success'),
			);
		} catch (error) {
			next(error);
		}
	}

	public async update(
		req: Request,
		res: Response,
		next: NextFunction,
	): Promise<void> {
		try {
			const { id } = req.params;
			const accountId: number = parseInt(id, 10);
			const params = req.body;

			if (req.file) {
				params.avatar = req.file?.filename;
			}

			const account = await service.updateAdmin(
				accountId,
				params,
				TypeUpdateAdmin.ACCOUNT,
			);

			return apiSuccess(res, next, account, trans('success'));
		} catch (error) {
			next(error);
		}
	}

	public async delete(
		req: Request,
		res: Response,
		next: NextFunction,
	): Promise<void> {
		try {
			const { id } = req.params;

			const account = await service.deleteAdmin(parseInt(id));

			return apiSuccess(res, next, account, trans('success'));
		} catch (error) {
			next(error);
		}
	}
}
