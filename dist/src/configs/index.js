"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.i18nConfig = exports.corsOptions = exports.logger = exports.header = exports.env = void 0;
const env_config_1 = __importDefault(require("./env.config"));
exports.env = env_config_1.default;
const cors_config_1 = require("./cors.config");
Object.defineProperty(exports, "corsOptions", { enumerable: true, get: function () { return cors_config_1.corsOptions; } });
const header_config_1 = __importDefault(require("./header.config"));
exports.header = header_config_1.default;
const logger_config_1 = __importDefault(require("./logger.config"));
exports.logger = logger_config_1.default;
const i18n_config_1 = __importDefault(require("./i18n.config"));
exports.i18nConfig = i18n_config_1.default;
//# sourceMappingURL=index.js.map