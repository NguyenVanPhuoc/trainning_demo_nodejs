"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const response_util_1 = require("../../utils/response.util");
const translation_util_1 = require("../../utils/translation.util");
const department_service_1 = require("../../services/department.service");
const dto_1 = require("../../dto");
const service = new department_service_1.DepartmentService();
class DepartmentController {
    getList(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { keyword } = req.query;
                const response = yield service.getList(keyword ? String(keyword) : '');
                return (0, response_util_1.apiSuccess)(res, next, response, (0, translation_util_1.trans)('success'));
            }
            catch (error) {
                next(error);
            }
        });
    }
    store(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const params = req.body;
                const departments = yield service.create(params);
                return (0, response_util_1.apiSuccess)(res, next, departments, (0, translation_util_1.trans)('success'));
            }
            catch (error) {
                next(error);
            }
        });
    }
    edit(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const departmentId = parseInt(id, 10);
                const result = yield service.find(departmentId);
                return (0, response_util_1.apiSuccess)(res, next, (0, dto_1.plainObject)(dto_1.DepartmentnDto, result, true), (0, translation_util_1.trans)('success'));
            }
            catch (error) {
                next(error);
            }
        });
    }
    update(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const departmentId = parseInt(id, 10);
                const params = req.body;
                const result = yield service.update({ id: departmentId }, params);
                return (0, response_util_1.apiSuccess)(res, next, result, (0, translation_util_1.trans)('success'));
            }
            catch (error) {
                next(error);
            }
        });
    }
    delete(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const result = yield service.delete({ id: parseInt(id) });
                return (0, response_util_1.apiSuccess)(res, next, result, (0, translation_util_1.trans)('success'));
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.default = DepartmentController;
//# sourceMappingURL=department.controller.js.map