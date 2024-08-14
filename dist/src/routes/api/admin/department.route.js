"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const department_controller_1 = __importDefault(require("../../../controllers/admin/department.controller"));
const department_validator_1 = require("../../../validators/department.validator");
const validation_util_1 = require("../../../utils/validation.util");
const media_util_1 = require("../../../utils/media.util");
class departmentRoute {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new department_controller_1.default();
        this.registerRoutes();
    }
    registerRoutes() {
        this.router.get('/', this.controller.getList);
        this.router.post('/store', (0, media_util_1.formDataNoFile)(), (0, validation_util_1.validateBody)((0, department_validator_1.DepartmentValidationSchema)()), this.controller.store);
        this.router.get('/edit/:id', this.controller.edit);
        this.router.post('/update/:id', (0, media_util_1.formDataNoFile)(), (0, validation_util_1.validateBody)((0, department_validator_1.DepartmentValidationSchema)()), this.controller.update);
        this.router.delete('/delete/:id', this.controller.delete);
    }
}
exports.default = new departmentRoute();
//# sourceMappingURL=department.route.js.map