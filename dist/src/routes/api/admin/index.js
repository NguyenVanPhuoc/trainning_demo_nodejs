"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_route_1 = __importDefault(require("./auth.route"));
const admin_route_1 = __importDefault(require("./admin.route"));
const department_route_1 = __importDefault(require("./department.route"));
class AdminRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.registerRoutes();
    }
    registerRoutes() {
        this.router.use('/auth', auth_route_1.default.router);
        this.router.use('/admins', admin_route_1.default.router);
        this.router.use('/departments', department_route_1.default.router);
    }
}
exports.default = new AdminRoutes();
//# sourceMappingURL=index.js.map