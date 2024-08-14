import * as dotenv from 'dotenv';
import * as path from 'path';
import { description, name, version } from '../package.json';

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
		salt_round: process.env.SALT_ROUND || 'salt_round',
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
	relatedDatabase: {
		host: process.env.DB_RELATED_HOST || 'localhost',
		port: Number(process.env.DB_RELATED_PORT) || 5432,
		username: process.env.DB_RELATED_USERNAME || 'postgres',
		password: process.env.DB_RELATED_PASSWORD || '123456',
		name: process.env.DB_RELATED_DATABASE || 'nodejs',
		dialect: process.env.DB_DIALECT || 'postgres',
		max: Number(process.env.DB_POOL_MAX) || 5,
		min: Number(process.env.DB_POOL_MIN) || 0,
		acquire: Number(process.env.DB_POOL_ACQUIRE) || 30000,
		idle: Number(process.env.DB_POOL_IDLE) || 10000,
		logging: process.env.DB_RELATED_LOGGING === 'true',
		isSync: process.env.DB_RELATED_SYNC === 'true',
	},
	jwt: {
		scret: process.env.JWT_SCRET || 'scret',
		expires_in: Number(process.env.JWT_EXPIRES_IN) || 86400000 * 7, // 7 days
	},
};