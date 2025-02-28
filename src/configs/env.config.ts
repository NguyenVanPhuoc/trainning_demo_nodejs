import * as dotenv from 'dotenv';
import * as path from 'path';
import { description, name, version } from '../../package.json';

dotenv.config({
	path: path.join(process.cwd(), '.env'),
});

/**
 * Environment variables
 */

export default {
	app: {
		root_path: path.join(process.cwd()),
		name,
		version,
		description,
		port: Number(process.env.APP_PORT) || 3000,
		host: process.env.APP_HOST || 'localhost',
		node_env: process.env.APP_ENV || 'development',
		allow_origin: process.env.ALLOW_ORIGIN || '*',
		url: process.env.APP_URL || 'http://192.168.3.152:3001/',
		salt_round: (() => {
			const saltRounds = process.env.SALT_ROUND;
			if (saltRounds && !isNaN(Number(saltRounds))) {
				return Number(saltRounds.toString().slice(0, 2));
			}

			return 1;
		})(),
	},
	database: {
		host: process.env.DB_HOST || 'localhost',
		port: Number(process.env.DB_PORT) || 5432,
		username: process.env.DB_USERNAME || 'postgres',
		password: process.env.DB_PASSWORD || '123456',
		name: process.env.DB_DATABASE || 'nodejs',
		dialect: process.env.DB_DIALECT || 'postgres',
		max: Number(process.env.DB_POOL_MAX) || 5,
		min: Number(process.env.DB_POOL_MIN) || 0,
		acquire: Number(process.env.DB_POOL_ACQUIRE) || 30000,
		idle: Number(process.env.DB_POOL_IDLE) || 10000,
		logging: process.env.DB_LOGGING === 'true',
		isSync: process.env.DB_SYNC === 'true',
	},
	jwt: {
		scret: process.env.JWT_SCRET || 'scret',
		expires_in: Number(process.env.JWT_EXPIRES_IN) || 1, // 1 days
	},
	mail: {
		host: process.env.MAIL_HOST || 'sandbox.smtp.mailtrap.io',
		port: process.env.MAIL_PORT || '2525',
		user: process.env.MAIL_USER || '9a3218f650afa3',
		pass: process.env.MAIL_PASS || '3ea2d77ecdeddd',
		from: process.env.MAIL_FROM || 'doanvanvandvv@gmail.com',
	},
	url_frontend: process.env.URL_FRONT || 'http://localhost:3000/',
	time_zone: process.env.TIME_ZONE || 'UTC',
};
