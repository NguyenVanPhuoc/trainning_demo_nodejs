import { Router } from 'express';
import authRoutes from './auth.route';
import adminRoute from './admin.route';
import departmentRoute from './department.route';

class AdminRoutes {
	public router: Router;

	constructor() {
		this.router = Router();
		this.registerRoutes();
	}

	protected registerRoutes(): void {
		this.router.use('/auth', authRoutes.router);
		this.router.use('/admins', adminRoute.router);
		this.router.use('/departments', departmentRoute.router);
	}
}

export default new AdminRoutes();
