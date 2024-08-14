"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExpiresIn = exports.sign = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const configs_1 = require("../configs");
const { expires_in, scret } = configs_1.env.jwt;
const sign = (data, expiresIn) => {
    return jsonwebtoken_1.default.sign(data, scret, { expiresIn });
};
exports.sign = sign;
const getExpiresIn = (remember = false) => {
    const currentDate = new Date();
    let defaultExpiresInDate = expires_in;
    if (remember) {
        defaultExpiresInDate = 30;
    }
    currentDate.setDate(currentDate.getDate() + defaultExpiresInDate);
    return Math.floor(currentDate.getTime() / 1000);
};
exports.getExpiresIn = getExpiresIn;
//# sourceMappingURL=jwt.util.js.map