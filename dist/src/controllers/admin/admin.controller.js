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
const admin_service_1 = require("../../services/admin.service");
const common_constant_1 = require("../../constants/common.constant");
const dto_1 = require("../../dto");
const service = new admin_service_1.AdminService();
class AdminController {
    getList(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { keyword, status } = req.query;
                const response = yield service.getListAccountAdmin(keyword ? String(keyword) : '', status ? Number(status) : null);
                return (0, response_util_1.apiSuccess)(res, next, response, (0, translation_util_1.trans)('success'));
            }
            catch (error) {
                next(error);
            }
        });
    }
    store(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const params = req.body;
                if (req.file) {
                    params.avatar = (_a = req.file) === null || _a === void 0 ? void 0 : _a.filename;
                }
                const account = yield service.createAdmin(params);
                return (0, response_util_1.apiSuccess)(res, next, account, (0, translation_util_1.trans)('success'));
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
                const adminId = parseInt(id, 10);
                const admin = yield service.find(adminId);
                return (0, response_util_1.apiSuccess)(res, next, (0, dto_1.plainObject)(dto_1.AdminDto, admin, true), (0, translation_util_1.trans)('success'));
            }
            catch (error) {
                next(error);
            }
        });
    }
    update(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const { id } = req.params;
                const accountId = parseInt(id, 10);
                const params = req.body;
                if (req.file) {
                    params.avatar = (_a = req.file) === null || _a === void 0 ? void 0 : _a.filename;
                }
                const account = yield service.updateAdmin(accountId, params, common_constant_1.TypeUpdateAdmin.ACCOUNT);
                return (0, response_util_1.apiSuccess)(res, next, account, (0, translation_util_1.trans)('success'));
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
                const account = yield service.deleteAdmin(parseInt(id));
                return (0, response_util_1.apiSuccess)(res, next, account, (0, translation_util_1.trans)('success'));
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.default = AdminController;
//# sourceMappingURL=admin.controller.js.map