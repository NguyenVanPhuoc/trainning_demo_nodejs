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
exports.validateBody = validateBody;
exports.validateAsync = validateAsync;
const axios_1 = require("axios");
const string_util_1 = require("./string.util");
const errror_util_1 = require("../utils/errror.util");
const translation_util_1 = require("./translation.util");
const namespace = 'validation';
const getMessage = (key, defaultValue, options) => {
    if ((0, translation_util_1.isMessageDefined)(key, namespace)) {
        return (0, translation_util_1.trans)(key, options, namespace);
    }
    return defaultValue !== null && defaultValue !== void 0 ? defaultValue : key;
};
const transValidate = (errDetail) => {
    var _a;
    const errorMessage = (0, string_util_1.removeQuotes)(errDetail.message);
    const label = getMessage((_a = errDetail.context) === null || _a === void 0 ? void 0 : _a.label);
    return getMessage(errorMessage, errorMessage, Object.assign(Object.assign({}, errDetail.context), { label }));
};
function validateBody(validationSchema) {
    return (req, res, next) => {
        try {
            let dataToValidate = req.query;
            const { rules, messages } = validationSchema;
            if (req.method == 'POST' || req.method == 'PUT') {
                dataToValidate = req.body;
            }
            const { error } = rules.validate(dataToValidate, {
                messages,
                abortEarly: true,
            });
            if (error) {
                throw new errror_util_1.AppError(transValidate(error.details[0]), axios_1.HttpStatusCode.BadRequest);
            }
            return next();
        }
        catch (error) {
            next(error);
        }
    };
}
function validateAsync(validationSchema) {
    return __awaiter(this, void 0, void 0, function* () {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                let dataToValidate = req.query;
                const { rules, messages } = validationSchema;
                if (req.method == 'POST' || req.method == 'PUT') {
                    dataToValidate = req.body;
                }
                yield rules.validateAsync(dataToValidate, {
                    messages,
                    abortEarly: true,
                });
                return next();
            }
            catch (error) {
                handleValidationError(error, next);
            }
        });
    });
}
function handleValidationError(error, next) {
    try {
        const errorMessage = transValidate(error.details[0]);
        throw new errror_util_1.AppError(errorMessage, axios_1.HttpStatusCode.BadRequest);
    }
    catch (err) {
        next(err);
    }
}
//# sourceMappingURL=validation.util.js.map