"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const header = (server) => {
    server.use((req, res, next) => {
        const origin = req.headers.origin || '';
        const allowedOrigins = _1.env.app.allow_origin;
        if (allowedOrigins == origin) {
            res.setHeader('Access-Control-Allow-Origin', origin);
        }
        res.header('Access-Control-Allow-Credentials', 'true');
        res.header('preflightContinue', 'false');
        res.header('Connection', 'Keep-Alive');
        res.header('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, PUT, PATCH, POST, DELETE');
        res.header('Access-Control-Allow-Headers', `Content-Type, Origin, X-Requested-With, Accept, Authorization, access-token, X-Access-Token`);
        if (req.method === 'OPTIONS') {
            res.send(200);
        }
        else {
            next();
        }
    });
};
exports.default = header;
//# sourceMappingURL=header.config.js.map