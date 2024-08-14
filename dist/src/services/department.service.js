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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentService = void 0;
const dto_1 = require("../dto");
const base_service_1 = require("./base.service");
const department_1 = require("../entities/department");
const typeorm_1 = require("typeorm");
const datasource_1 = __importDefault(require("../database/datasource"));
class DepartmentService extends base_service_1.BaseService {
    constructor() {
        const departmentRepository = datasource_1.default.getRepository(department_1.Department);
        super(departmentRepository, dto_1.DepartmentnDto);
    }
    getList(keyword) {
        return __awaiter(this, void 0, void 0, function* () {
            const searchTerm = (0, typeorm_1.Like)(`%${keyword}%`);
            let conditions = {};
            if (keyword) {
                conditions = [
                    {
                        title: searchTerm,
                    },
                    {
                        email: searchTerm,
                    },
                ];
            }
            return yield this.all(conditions, {
                id: 'DESC',
            });
        });
    }
}
exports.DepartmentService = DepartmentService;
//# sourceMappingURL=department.service.js.map