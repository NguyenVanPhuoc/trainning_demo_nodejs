"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsOptions = void 0;
const env_config_1 = __importDefault(require("./env.config"));
const corsOptions = {
    origin: env_config_1.default.app.allow_origin,
    optionsSuccessStatus: 200,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    credentials: true,
};
exports.corsOptions = corsOptions;
//# sourceMappingURL=cors.config.js.map