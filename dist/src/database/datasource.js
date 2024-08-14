"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const configs_1 = require("../configs");
const typeorm_1 = require("typeorm");
const config = configs_1.env.database;
exports.default = new typeorm_1.DataSource({
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
});
//# sourceMappingURL=datasource.js.map