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
exports.BaseService = void 0;
const dto_1 = require("../dto");
class BaseService {
    constructor(repository, dto) {
        this.repository = repository;
        this.dto = dto;
    }
    all(conditions_1) {
        return __awaiter(this, arguments, void 0, function* (conditions, sort = null, relations = null) {
            const queryOptions = {
                where: conditions,
            };
            if (sort) {
                queryOptions.order = sort;
            }
            if (relations) {
                queryOptions.relations = relations;
            }
            return yield this.repository.find(queryOptions);
        });
    }
    find(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.findOneById(id);
        });
    }
    findOne(conditions) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.findOneBy(conditions);
        });
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const entity = this.repository.create(data);
            const createEntity = yield this.repository.save(entity);
            return (0, dto_1.plainObject)(this.dto, createEntity);
        });
    }
    update(conditions, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.update(conditions, data);
        });
    }
    delete(conditions) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.delete(conditions);
        });
    }
    exists(conditions) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.exist({
                where: conditions,
            });
        });
    }
}
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map