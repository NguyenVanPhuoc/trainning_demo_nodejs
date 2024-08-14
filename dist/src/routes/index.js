"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = __importDefault(require("./api"));
const routes = (server) => {
    server.use('/api', api_1.default.router);
};
exports.default = routes;
//# sourceMappingURL=index.js.map