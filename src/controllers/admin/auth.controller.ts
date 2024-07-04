import { NextFunction, Request, Response } from 'express';
import { apiSuccess } from '@utils/response.util';
import { trans } from '@utils/translation.util';
import { AdminService } from '@services/admin.service';
import { UserPayload } from '@/interfaces/auth.interface';
import { getExpiresIn, sign } from '@/utils/jwt.util'
import { isTrueSet } from '@/utils/string.util';

const service = new AdminService();

export default class AuthController {
	public async login(
		req: Request,
		res: Response,
		next: NextFunction,
	): Promise<void> {
		try {
			
			let loggedUser: UserPayload | null = null;
			const { email, password, remember } = req.body;
			const isRemember = isTrueSet(remember);
			const expiresIn = getExpiresIn(isRemember);

			loggedUser = await service.login(email, password, expiresIn);

			const token = sign(loggedUser, expiresIn);
			const response = {
				...loggedUser,
				access_token: token,
			};

			return apiSuccess(res, next, response, trans('success'));
		} catch (error) {
			next(error);
		}
	}
}
