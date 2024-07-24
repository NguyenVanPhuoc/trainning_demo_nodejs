import { Router } from 'express';
import AdminController from '@/controllers/admin/admin.controller';
import { AdminValidationSchema } from '@/validators/admin.validator';
import { validateBody } from '@/utils/validation.util';
import { AdminAttributes } from '@/interfaces/admin.interface';
import { uploadSingle } from '@/utils/media.util';

class adminRoute {
	public router: Router;
	protected controller: AdminController;

	constructor() {
		this.router = Router();
		this.controller = new AdminController();
		this.registerRoutes();
	}
	protected registerRoutes(): void {
		this.router.get('/', this.controller.getList);
		this.router.post(
			'/store',
			uploadSingle('avatar', 'admin'),
			validateBody<AdminAttributes>(AdminValidationSchema()),
			this.controller.store,
		);
		this.router.get('/edit/:id', this.controller.edit);
		this.router.post(
			'/update/:id',
			uploadSingle('avatar', 'admin'),
			validateBody<AdminAttributes>(AdminValidationSchema()),
			this.controller.update,
		);
		this.router.delete('/delete/:id', this.controller.delete);
	}
}

export default new adminRoute();
