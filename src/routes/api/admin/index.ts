import { Router } from 'express';
import authRoutes from './auth.route';
import adminRoute from './admin.route'

class adminRoutes {
	public router: Router;

	constructor() {
		this.router = Router();
		this.registerRoutes();
	}

	protected registerRoutes(): void {
    this.router.use('/auth', authRoutes.router);
		this.router.use('/admins', adminRoute.router);
	}
}

export default new adminRoutes();
