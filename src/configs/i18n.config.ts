import path from 'path';
import i18next from 'i18next';
import Backend from 'i18next-fs-backend';
import { LanguageDetector } from 'i18next-http-middleware';

i18next
	.use(Backend)
	.use(LanguageDetector)
	.init({
		fallbackLng: 'vi',
		backend: {
			loadPath: path.join(__dirname, '../locales/{{lng}}/{{ns}}.json'),
		},
		detection: {
			order: ['querystring', 'cookie'],
			caches: ['cookie'],
		},
		preload: ['vi', 'jp'],
		ns: ['validation', 'translation'],
		defaultNS: 'translation',
	});

export default i18next;
