"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const i18next_1 = __importDefault(require("i18next"));
const i18next_fs_backend_1 = __importDefault(require("i18next-fs-backend"));
const i18next_http_middleware_1 = require("i18next-http-middleware");
i18next_1.default
    .use(i18next_fs_backend_1.default)
    .use(i18next_http_middleware_1.LanguageDetector)
    .init({
    fallbackLng: 'vi',
    backend: {
        loadPath: path_1.default.join(__dirname, '../locales/{{lng}}/{{ns}}.json'),
    },
    detection: {
        order: ['querystring', 'cookie'],
        caches: ['cookie'],
    },
    preload: ['vi', 'jp'],
    ns: ['validation', 'translation'],
    defaultNS: 'translation',
});
exports.default = i18next_1.default;
//# sourceMappingURL=i18n.config.js.map