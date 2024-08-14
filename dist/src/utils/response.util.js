"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiSuccess = void 0;
const apiSuccess = (response, next, data, message) => {
    response.locals.data = data;
    response.locals.message = message;
    return next();
};
exports.apiSuccess = apiSuccess;
//# sourceMappingURL=response.util.js.map