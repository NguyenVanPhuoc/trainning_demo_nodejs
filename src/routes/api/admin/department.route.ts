import { Router } from 'express';
import DepartmentController from '@/controllers/admin/department.controller';
import { DepartmentAttributes } from '@/interfaces/department.interface';
import { DepartmentValidationSchema } from '@/validators/department.validator';
import { validateBody } from '@/utils/validation.util';
import { formDataNoFile } from '@/utils/media.util';

class departmentRoute {
	public router: Router;
	protected controller: DepartmentController;

	constructor() {
		this.router = Router();
		this.controller = new DepartmentController();
		this.registerRoutes();
	}
	protected registerRoutes(): void {
		this.router.get('/', this.controller.getList);
		this.router.post(
			'/store',
      formDataNoFile(),
			validateBody<DepartmentAttributes>(DepartmentValidationSchema()),
			this.controller.store,
		);
    this.router.get('/edit/:id', this.controller.edit);
    this.router.post(
			'/update/:id',
			formDataNoFile(),
			validateBody<DepartmentAttributes>(DepartmentValidationSchema()),
			this.controller.update,
		);
    this.router.delete('/delete/:id', this.controller.delete);
	}
}

export default new departmentRoute();
