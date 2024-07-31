import { NextFunction, Request, Response } from 'express';
import { apiSuccess } from '@/utils/response.util';
import { trans } from '@/utils/translation.util';
import { DepartmentService } from '@/services/department.service';
import { DepartmentnDto, plainObject } from '@/dto';

const service = new DepartmentService();

export default class DepartmentController {
	public async getList(
		req: Request,
		res: Response,
		next: NextFunction,
	): Promise<void> {
		try {
			const { keyword } = req.query;
			const response = await service.getList(
				keyword ? String(keyword) : '',
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

			const departments = await service.create(params);

			return apiSuccess(res, next, departments, trans('success'));
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
			const departmentId: number = parseInt(id, 10);

			const result = await service.find(departmentId);

			return apiSuccess(
				res,
				next,
				plainObject(DepartmentnDto, result, true),
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
			const departmentId: number = parseInt(id, 10);
			const params = req.body;

			const result = await service.update({ id: departmentId }, params);

			return apiSuccess(res, next, result, trans('success'));
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

			const result = await service.delete({ id: parseInt(id) });

			return apiSuccess(res, next, result, trans('success'));
		} catch (error) {
			next(error);
		}
	}
}
