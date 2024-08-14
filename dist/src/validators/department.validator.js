"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentValidationSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const common_constant_1 = require("../constants/common.constant");
const DepartmentValidationSchema = () => {
    return {
        rules: joi_1.default.object({
            email: joi_1.default.string()
                .pattern(new RegExp(common_constant_1.Regex.EMAIL))
                .email()
                .max(50)
                .label('Email'),
            title: joi_1.default.string().required().max(255).label('Title'),
            phone: joi_1.default.string()
                .pattern(new RegExp('^[0-9]{10,13}$'))
                .allow('', null)
                .label('Phone number'),
            user_id: joi_1.default.number().required().integer().label('User'),
        }),
        messages: {
            'any.required': 'required',
        },
    };
};
exports.DepartmentValidationSchema = DepartmentValidationSchema;
//# sourceMappingURL=department.validator.js.map