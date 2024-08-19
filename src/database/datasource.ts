import path from 'path';
import { env } from '../configs';
import { DataSource, DataSourceOptions } from 'typeorm';

const config = env.database;

export default new DataSource({
	type: config.dialect,
	host: config.host,
	port: config.port,
	username: config.username,
	password: config.password,
	database: config.name,
	synchronize: config.isSync,
	logging: config.logging,
	extra: {
		insecureAuth: true,
	},
	entities: [path.join(__dirname, '../entities/*.{ts,js}')],
	migrations: [path.join(__dirname, '../database/migrations/*.{ts,js}')],
} as DataSourceOptions);
