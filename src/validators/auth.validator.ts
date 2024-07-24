import Joi from 'joi';
import { ValidationSchemaInterface } from '../interfaces/validation.interface';
import { AuthAttributes } from '../interfaces/auth.interface';

export const getLoginValidationSchema =
	(): ValidationSchemaInterface<AuthAttributes> => {
		return {
			rules: Joi.object<AuthAttributes>({
				email: Joi.string()
					.required()
					.email()
					.label('Email')
					.messages({}),
				password: Joi.string()
					.required()
					.label('Password')
					.messages({}),
				remember: Joi.boolean().label('Remember me'),
			}),
			messages: {
				'any.required': 'required',
			},
		};
	};
