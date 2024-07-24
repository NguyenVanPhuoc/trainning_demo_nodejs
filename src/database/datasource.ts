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
	entities: ['src/entities/*.ts'],
	migrations: ['src/database/migrations/*.ts'],
} as DataSourceOptions);
