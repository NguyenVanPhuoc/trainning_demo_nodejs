"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTrueSet = exports.generateRandom = exports.removeQuotes = void 0;
const removeQuotes = (str) => str.replace(/['"]+/g, '');
exports.removeQuotes = removeQuotes;
const generateRandom = (length, chars) => {
    const randomChars = chars !== null && chars !== void 0 ? chars : 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
};
exports.generateRandom = generateRandom;
const isTrueSet = (boolString) => {
    var _a;
    return ((_a = boolString === null || boolString === void 0 ? void 0 : boolString.toLowerCase) === null || _a === void 0 ? void 0 : _a.call(boolString)) === 'true';
};
exports.isTrueSet = isTrueSet;
//# sourceMappingURL=string.util.js.map