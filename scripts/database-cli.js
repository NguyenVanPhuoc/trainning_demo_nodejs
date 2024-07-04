#!/usr/bin/env node

const yargs = require('yargs');
const { execSync } = require('child_process');

const {
	_: [type, name],
} = yargs.argv;

if (!name) {
	console.error('Name missing!');
	process.exit(1);
}

if (type == 'migration') {
	const migrationPath = `src/database/migrations/${name}`;
	execSync(`typeorm migration:create ${migrationPath}`, { stdio: 'inherit' });
}

if (type == 'entity') {
	const entityPath = `src/entities/${name}`;
	execSync(`typeorm entity:create ${entityPath}`, { stdio: 'inherit' });
}
