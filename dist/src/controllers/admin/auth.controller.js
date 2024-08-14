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
const jwt_util_1 = require("../../utils/jwt.util");
const string_util_1 = require("../../utils/string.util");
const service = new admin_service_1.AdminService();
class AuthController {
    login(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let loggedUser = null;
                const { email, password, remember } = req.body;
                const isRemember = (0, string_util_1.isTrueSet)(remember);
                const expiresIn = (0, jwt_util_1.getExpiresIn)(isRemember);
                loggedUser = yield service.login(email, password, expiresIn);
                const token = (0, jwt_util_1.sign)(loggedUser, expiresIn);
                const response = Object.assign(Object.assign({}, loggedUser), { access_token: token });
                return (0, response_util_1.apiSuccess)(res, next, response, (0, translation_util_1.trans)('success'));
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.default = AuthController;
//# sourceMappingURL=auth.controller.js.map