"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const admin_1 = __importDefault(require("./admin"));
class apiRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.registerRoutes();
    }
    registerRoutes() {
        this.router.use('/admin', admin_1.default.router);
    }
}
exports.default = new apiRoutes();
//# sourceMappingURL=index.js.map