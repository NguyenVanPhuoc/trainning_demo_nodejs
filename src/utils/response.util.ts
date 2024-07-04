import { NextFunction, Response } from 'express';

export const apiSuccess = <T>(
	response: Response,
	next: NextFunction,
	data: T,
	message?: string | null,
): void => {
	response.locals.data = data;
	response.locals.message = message;

	return next();
};
