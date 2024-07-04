import { NextFunction, Request, Response } from 'express';
import { apiSuccess } from '@/utils/response.util';
import { trans } from '@/utils/translation.util';
import { AdminService } from '@/services/admin.service';

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
				status ? Number(status) : null
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
}
