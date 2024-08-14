"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const admin_controller_1 = __importDefault(require("../../../controllers/admin/admin.controller"));
const admin_validator_1 = require("../../../validators/admin.validator");
const validation_util_1 = require("../../../utils/validation.util");
const media_util_1 = require("../../../utils/media.util");
class adminRoute {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new admin_controller_1.default();
        this.registerRoutes();
    }
    registerRoutes() {
        this.router.get('/', this.controller.getList);
        this.router.post('/store', (0, media_util_1.uploadSingle)('avatar', 'admin'), (0, validation_util_1.validateBody)((0, admin_validator_1.AdminValidationSchema)()), this.controller.store);
        this.router.get('/edit/:id', this.controller.edit);
        this.router.post('/update/:id', (0, media_util_1.uploadSingle)('avatar', 'admin'), (0, validation_util_1.validateBody)((0, admin_validator_1.AdminValidationSchema)()), this.controller.update);
        this.router.delete('/delete/:id', this.controller.delete);
    }
}
exports.default = new adminRoute();
//# sourceMappingURL=admin.route.js.map