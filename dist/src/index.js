"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const axios_1 = require("axios");
const http_1 = require("http");
const i18next_http_middleware_1 = require("i18next-http-middleware");
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const database_1 = __importDefault(require("./database"));
const translation_util_1 = require("./utils/translation.util");
const response_loader_1 = __importDefault(require("./loaders/response.loader"));
const error_exeption_1 = __importDefault(require("./exceptions/error.exeption"));
const configs_1 = require("./configs");
const language_middleware_1 = __importDefault(require("./middleware/language.middleware"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.server = (0, http_1.createServer)(this.app);
        this.config();
    }
    config() {
        const port = configs_1.env.app.port;
        const { handleLanguage, errorHandler } = this.getMiddlewareFunctions();
        this.app.set('port', port);
        this.app.use((0, cors_1.default)(configs_1.corsOptions));
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use(express_1.default.static(path_1.default.join(process.cwd(), 'public')));
        this.app.use((0, i18next_http_middleware_1.handle)(configs_1.i18nConfig));
        // header
        (0, configs_1.header)(this.app);
        // Setting up routes
        (0, routes_1.default)(this.app);
        // Applying middleware and error handling
        this.app.use(errorHandler);
        this.app.use(handleLanguage);
        // Format response middleware
        this.app.use(response_loader_1.default);
        // Handling not found routes
        this.app.all('*', (req, res) => {
            return res.status(axios_1.HttpStatusCode.NotFound).json({
                message: (0, translation_util_1.trans)('error.not_found', undefined, 'validation'),
            });
        });
    }
    getMiddlewareFunctions() {
        // Middleware to handle language
        const handleLanguage = (req, res, next) => {
            language_middleware_1.default.handle(req, res, next);
        };
        // Error handling middleware
        const errorHandler = (err, req, res, next) => {
            error_exeption_1.default.handle(err, req, res, next);
        };
        return {
            handleLanguage,
            errorHandler,
        };
    }
    start() {
        database_1.default
            .connectToDatabase()
            .then(() => {
            this.server.listen(this.app.get('port'), () => {
                const { port } = this.server.address();
                console.log(`Server listening in port ${port}`);
            });
        })
            .catch(console.log);
    }
}
const server = new Server();
server.start();
//# sourceMappingURL=index.js.map