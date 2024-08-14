"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_validator_1 = require("../../../validators/auth.validator");
const auth_controller_1 = __importDefault(require("../../../controllers/admin/auth.controller"));
const validation_util_1 = require("../../../utils/validation.util");
const media_util_1 = require("../../../utils/media.util");
class AuthRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new auth_controller_1.default();
        this.registerRoutes();
    }
    registerRoutes() {
        this.router.post('/login', (0, media_util_1.formDataNoFile)(), // Xử lý form-data không có file
        (0, validation_util_1.validateBody)((0, auth_validator_1.getLoginValidationSchema)()), this.controller.login);
    }
}
exports.default = new AuthRoutes();
//# sourceMappingURL=auth.route.js.map