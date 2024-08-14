"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
const path = __importStar(require("path"));
const package_json_1 = require("../package.json");
dotenv.config({
    path: path.join(process.cwd(), '.env'),
});
/**
 * Environment variables
 */
exports.default = {
    app: {
        root_path: path.join(process.cwd()),
        name: package_json_1.name,
        version: package_json_1.version,
        description: package_json_1.description,
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
//# sourceMappingURL=env.config.js.map