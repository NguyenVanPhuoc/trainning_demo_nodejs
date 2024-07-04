import { CallbackError } from 'i18next';
import { i18nConfig, logger } from '../configs';
import { NextFunction, Request, Response } from 'express';
import { UserLanguage } from '../constants/database.constant';

class LanguageMiddleware {
	static async handle(req: Request, res: Response, next: NextFunction) {
		const { language: lngNumber } = res.locals?.user || {
			language: UserLanguage.VI,
		};

		const lng = UserLanguage[lngNumber].toLowerCase();

		if (lng) {
			i18nConfig.changeLanguage(lng, (err: CallbackError) => {
				if (err) {
					logger.error(err);
				}
			});
		}

		next();
	}
}

export default LanguageMiddleware;