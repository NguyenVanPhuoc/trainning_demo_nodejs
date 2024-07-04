import { Router } from 'express';
import { getLoginValidationSchema } from '@validators/auth.validator';
import AuthController from '@controllers/admin/auth.controller';
import { validateBody } from '@utils/validation.util';
import { AuthAttributes } from '@interfaces/auth.interface';

class authRoutes {
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
			validateBody<AuthAttributes>(getLoginValidationSchema()),
			this.controller.login,
		);
	}
}

export default new authRoutes();
