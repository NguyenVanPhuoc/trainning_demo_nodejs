import { Router } from 'express';
import { getLoginValidationSchema } from '@validators/auth.validator';
import AuthController from '@controllers/admin/auth.controller';
import { validateBody } from '@utils/validation.util';
import { AuthAttributes } from '@interfaces/auth.interface';
import { formDataNoFile } from '@/utils/media.util';

class AuthRoutes {
	public router: Router;
	protected controller: AuthController;

	constructor() {
		this.router = Router();
		this.controller = new AuthController();
		this.registerRoutes();
	}

	protected registerRoutes(): void {
		this.router.post(
			'/login',
			formDataNoFile(),  // Xử lý form-data không có file
			validateBody<AuthAttributes>(getLoginValidationSchema()),
			this.controller.login,
		);
	}
}

export default new AuthRoutes();
