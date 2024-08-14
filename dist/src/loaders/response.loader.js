"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function formatResponse(req, res, next) {
    const data = res.locals.data;
    const message = res.locals.message;
    const statusCode = res.statusCode;
    if (data || message) {
        return res.json({
            data,
            message,
            statusCode,
        });
    }
    next();
}
exports.default = formatResponse;
//# sourceMappingURL=response.loader.js.map