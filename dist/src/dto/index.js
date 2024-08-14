"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentnDto = exports.AdminDto = exports.plainObject = void 0;
const class_transformer_1 = require("class-transformer");
const admin_dto_1 = require("./admin.dto");
Object.defineProperty(exports, "AdminDto", { enumerable: true, get: function () { return admin_dto_1.AdminDto; } });
const department_do_1 = require("./department.do");
Object.defineProperty(exports, "DepartmentnDto", { enumerable: true, get: function () { return department_do_1.DepartmentnDto; } });
const plainObject = (dto, entity, excludeExtraneousValues = true) => {
    return (0, class_transformer_1.plainToInstance)(dto, entity, {
        excludeExtraneousValues,
        exposeUnsetFields: false,
    });
};
exports.plainObject = plainObject;
//# sourceMappingURL=index.js.map