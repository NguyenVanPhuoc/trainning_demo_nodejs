import Joi from 'joi';
import { DepartmentAttributes } from '@interfaces/department.interface';
import { ValidationSchemaInterface } from '@interfaces/validation.interface';
import { Regex } from '@constants/common.constant';

export const DepartmentValidationSchema =
	(): ValidationSchemaInterface<DepartmentAttributes> => {
		return {
			rules: Joi.object<DepartmentAttributes>({
				email: Joi.string()
					.pattern(new RegExp(Regex.EMAIL))
					.email()
					.max(50)
					.label('Email'),
				title: Joi.string().required().max(255).label('Title'),
				phone: Joi.string()
					.pattern(new RegExp('^[0-9]{10,13}$'))
					.allow('', null)
					.label('Phone number'),
				user_id: Joi.number().required().integer().label('User'),
			}),
			messages: {
				'any.required': 'required',
			},
		};
	};
