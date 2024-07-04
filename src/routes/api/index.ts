import { Router } from 'express';
import adminRoutes from './admin';

class apiRoutes {
	public router: Router;

	constructor() {
		this.router = Router();
		this.registerRoutes();
	}

	protected registerRoutes(): void {
		this.router.use('/admin', adminRoutes.router);
	}
}

export default new apiRoutes();
