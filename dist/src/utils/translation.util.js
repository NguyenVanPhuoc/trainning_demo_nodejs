"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trans = exports.isMessageDefined = void 0;
const i18next_1 = require("i18next");
const isMessageDefined = (key, namespace = 'translation') => {
    return (0, i18next_1.exists)(key, {
        ns: namespace,
    });
};
exports.isMessageDefined = isMessageDefined;
const trans = (key, options, namespace = 'translation') => {
    var _a;
    if ((0, exports.isMessageDefined)(key, namespace)) {
        return (0, i18next_1.t)(key, Object.assign(Object.assign({}, options), { ns: namespace }));
    }
    return (_a = options === null || options === void 0 ? void 0 : options.defaultValue) !== null && _a !== void 0 ? _a : key;
};
exports.trans = trans;
//# sourceMappingURL=translation.util.js.map