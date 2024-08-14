"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminValidationSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const common_constant_1 = require("../constants/common.constant");
const AdminValidationSchema = () => {
    return {
        rules: joi_1.default.object({
            email: joi_1.default.string()
                .pattern(new RegExp(common_constant_1.Regex.EMAIL))
                .required()
                .email()
                .max(50)
                .label('Email'),
            username: joi_1.default.string()
                .required()
                .min(6)
                .max(50)
                .pattern(new RegExp(common_constant_1.Regex.USERNAME))
                .label('Username'),
            full_name: joi_1.default.string()
                .max(50)
                .label('Full name')
                .allow('', null),
            address: joi_1.default.string().max(50).label('Address').allow('', null),
            phone: joi_1.default.string()
                .pattern(new RegExp('^[0-9]{10,13}$'))
                .allow('', null)
                .label('Phone number'),
            birth_date: joi_1.default.date()
                .iso()
                .messages({})
                .label('Birth date')
                .allow('', null),
            avatar: joi_1.default.string().allow('', null),
            status: joi_1.default.boolean(),
            role: joi_1.default.number().integer().label('Role'),
        }),
        messages: {
            'any.required': 'required',
            'string.pattern.base': 'not_regex',
            'string.min': 'min_field',
            'string.max': 'max_field',
            'any.invalid': 'invalid',
        },
    };
};
exports.AdminValidationSchema = AdminValidationSchema;
//# sourceMappingURL=admin.validator.js.map