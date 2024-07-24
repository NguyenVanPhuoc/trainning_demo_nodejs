import Joi from 'joi';
import { AdminAttributes } from '@interfaces/admin.interface';
import { ValidationSchemaInterface } from '@interfaces/validation.interface';
import { Regex } from '@constants/common.constant';

export const AdminValidationSchema =
	(): ValidationSchemaInterface<AdminAttributes> => {
		return {
			rules: Joi.object<AdminAttributes>({
				email: Joi.string()
					.pattern(new RegExp(Regex.EMAIL))
					.required()
					.email()
					.max(50)
					.label('Email'),
				username: Joi.string()
					.required()
					.min(6)
					.max(50)
					.pattern(new RegExp(Regex.USERNAME))
					.label('Username'),
				full_name: Joi.string()
					.max(50)
					.label('Full name')
					.allow('', null),
				address: Joi.string().max(50).label('Address').allow('', null),
				phone: Joi.string()
					.pattern(new RegExp('^[0-9]{10,13}$'))
					.allow('', null)
					.label('Phone number'),
				birth_date: Joi.date()
					.iso()
					.messages({})
					.label('Birth date')
					.allow('', null),
				avatar: Joi.string().allow('', null),
				status: Joi.boolean(),
				role: Joi.number().integer().label('Role'),
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
