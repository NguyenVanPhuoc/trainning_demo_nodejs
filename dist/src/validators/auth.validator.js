"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLoginValidationSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const getLoginValidationSchema = () => {
    return {
        rules: joi_1.default.object({
            email: joi_1.default.string()
                .required()
                .email()
                .label('Email')
                .messages({}),
            password: joi_1.default.string()
                .required()
                .label('Password')
                .messages({}),
            remember: joi_1.default.boolean().label('Remember me'),
        }),
        messages: {
            'any.required': 'required',
        },
    };
};
exports.getLoginValidationSchema = getLoginValidationSchema;
//# sourceMappingURL=auth.validator.js.map