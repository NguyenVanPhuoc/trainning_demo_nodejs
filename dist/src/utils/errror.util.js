"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = void 0;
const axios_1 = require("axios");
class AppError extends Error {
    constructor(message, statusCode = axios_1.HttpStatusCode.BadRequest) {
        super(message);
        this.name = Error.name;
        this.statusCode = statusCode;
    }
}
exports.AppError = AppError;
//# sourceMappingURL=errror.util.js.map