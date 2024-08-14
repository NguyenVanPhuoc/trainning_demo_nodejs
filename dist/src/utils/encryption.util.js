"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomPassword = exports.transformerPassword = exports.compareHash = exports.createHash = void 0;
const bcrypt = require("bcryptjs");
const configs_1 = require("../configs");
const { salt_round: saltRounds } = configs_1.env.app;
const createHash = (data) => {
    return bcrypt.hashSync(data, saltRounds);
};
exports.createHash = createHash;
const compareHash = (data, hash) => {
    return bcrypt.compareSync(data, hash);
};
exports.compareHash = compareHash;
exports.transformerPassword = {
    to: function (value) {
        return (0, exports.createHash)(value);
    },
    from: function (value) {
        return value;
    },
};
const generateRandomPassword = (length, specialChars = '@#$%^&+!=', numericChars = '0123456789', lowercaseChars = 'abcdefghijklmnopqrstuvwxyz', uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ') => {
    const allCharacters = specialChars + numericChars + lowercaseChars + uppercaseChars;
    let password = '';
    password += specialChars[Math.floor(Math.random() * specialChars.length)];
    password += numericChars[Math.floor(Math.random() * numericChars.length)];
    password +=
        uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)];
    password +=
        lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)];
    const minLength = length;
    const remainingLength = Math.max(minLength - password.length, 0);
    for (let i = 0; i < remainingLength; i++) {
        password +=
            allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }
    return password
        .split('')
        .sort(() => Math.random() - 0.5)
        .join('');
};
exports.generateRandomPassword = generateRandomPassword;
//# sourceMappingURL=encryption.util.js.map