"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const configs_1 = require("../configs");
class ErrorHandler {
    static handle(error, req, res, next) {
        const responseData = {
            code: error.statusCode || axios_1.HttpStatusCode.InternalServerError,
            message: error.message || 'Internal Server Error',
        };
        let stack = configs_1.env.app.node_env === 'production' ? '' : error.stack;
        if (configs_1.env.app.node_env !== 'production') {
            if (stack) {
                const errorRegex = /^(\w+):\s(.+)\n([\s\S]+)/;
                const match = stack.match(errorRegex);
                if (match) {
                    const [, errorType, errorMessage, stackTrace] = match;
                    stack = {
                        type: errorType,
                        message: errorMessage,
                        stackTrace: stackTrace
                            .split('\n')
                            .map((line) => line.trim()),
                    };
                }
            }
            return res.status(responseData.code).json(Object.assign(Object.assign({}, responseData), { stack }));
        }
        return res.status(responseData.code).json(responseData);
    }
}
exports.default = ErrorHandler;
//# sourceMappingURL=error.exeption.js.map