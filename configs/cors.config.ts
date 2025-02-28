import env from './env.config';

const corsOptions = {
	origin: env.app.allow_origin,
	optionsSuccessStatus: 200,
	methods: 'GET,HEAD,PUT,PATCH,POST',
	preflightContinue: false,
	credentials: true,
};

export { corsOptions };