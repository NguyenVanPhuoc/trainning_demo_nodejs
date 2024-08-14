"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const configs_1 = require("../configs");
const database_constant_1 = require("../constants/database.constant");
class LanguageMiddleware {
    static handle(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const { language: lngNumber } = ((_a = res.locals) === null || _a === void 0 ? void 0 : _a.user) || {
                language: database_constant_1.UserLanguage.VI,
            };
            const lng = database_constant_1.UserLanguage[lngNumber].toLowerCase();
            if (lng) {
                configs_1.i18nConfig.changeLanguage(lng, (err) => {
                    if (err) {
                        configs_1.logger.error(err);
                    }
                });
            }
            next();
        });
    }
}
exports.default = LanguageMiddleware;
//# sourceMappingURL=language.middleware.js.map