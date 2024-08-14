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
exports.AdminService = void 0;
const dto_1 = require("../dto");
const base_service_1 = require("./base.service");
const admin_1 = require("../entities/admin");
const typeorm_1 = require("typeorm");
const errror_util_1 = require("../utils/errror.util");
const translation_util_1 = require("../utils/translation.util");
const axios_1 = require("axios");
const encryption_util_1 = require("../utils/encryption.util");
const configs_1 = require("../configs");
const string_util_1 = require("../utils/string.util");
const status_constant_1 = require("../constants/status.constant");
const datasource_1 = __importDefault(require("../database/datasource"));
const media_util_1 = require("../utils/media.util");
const common_constant_1 = require("../constants/common.constant");
class AdminService extends base_service_1.BaseService {
    constructor() {
        const adminRepository = datasource_1.default.getRepository(admin_1.Admin);
        super(adminRepository, dto_1.AdminDto);
    }
    login(email, password, expiresIn) {
        return __awaiter(this, void 0, void 0, function* () {
            const admin = yield this.findOne({ email });
            if (!admin) {
                throw new errror_util_1.AppError((0, translation_util_1.trans)('email.mismatch', {}, 'errors'), axios_1.HttpStatusCode.Forbidden);
            }
            const isMatch = (0, encryption_util_1.compareHash)(password, admin.password);
            if (!isMatch) {
                throw new errror_util_1.AppError((0, translation_util_1.trans)('password.invalid', {}, 'errors'), axios_1.HttpStatusCode.Forbidden);
            }
            if (!admin.status) {
                throw new errror_util_1.AppError((0, translation_util_1.trans)('status.inactive', {}, 'errors'), axios_1.HttpStatusCode.Forbidden);
            }
            return {
                id: admin.id,
                email: admin.email,
                username: admin.username,
                full_name: admin === null || admin === void 0 ? void 0 : admin.full_name,
                avatar: (admin === null || admin === void 0 ? void 0 : admin.avatar) ? configs_1.env.app.url + (admin === null || admin === void 0 ? void 0 : admin.avatar) : '',
                role: admin === null || admin === void 0 ? void 0 : admin.role,
                expires: expiresIn,
            };
        });
    }
    getListAccountAdmin(keyword, status) {
        return __awaiter(this, void 0, void 0, function* () {
            const searchTerm = (0, typeorm_1.Like)(`%${keyword}%`);
            let conditions = {};
            if (keyword) {
                conditions = [
                    {
                        status,
                        full_name: searchTerm,
                    },
                    {
                        status,
                        username: searchTerm,
                    },
                    {
                        status,
                        email: searchTerm,
                    },
                ];
            }
            else {
                conditions = { status };
            }
            return yield this.all(conditions, {
                id: 'DESC',
            });
        });
    }
    ensureUniqueField(fieldName, value) {
        return __awaiter(this, void 0, void 0, function* () {
            const fieldCheck = yield this.findOne({ [fieldName]: value });
            if (fieldCheck) {
                throw new errror_util_1.AppError((0, translation_util_1.trans)(`${fieldName}.unique`, {}, 'errors'), axios_1.HttpStatusCode.Unauthorized);
            }
        });
    }
    createAdmin(adminData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Check if username is unique
                yield this.ensureUniqueField('username', adminData.username);
                // Check if email is unique
                yield this.ensureUniqueField('email', adminData.email);
                // Set status
                adminData.status = (0, string_util_1.isTrueSet)(adminData.status)
                    ? status_constant_1.Status.ACTIVE
                    : status_constant_1.Status.INACTIVE;
                // Generate random password if not provided
                if (!adminData.password) {
                    const randomPassword = (0, encryption_util_1.generateRandomPassword)(8);
                    adminData.password = randomPassword;
                }
                //Set birth_date to null if not provided
                if (!adminData.birth_date) {
                    adminData.birth_date = null;
                }
                // Set default role if not provided
                if (adminData.role === undefined) {
                    adminData.role = common_constant_1.Role.ADMIN; // Set to the appropriate default role value
                }
                // Create admin account
                const account = yield this.create(adminData);
                return account;
            }
            catch (error) {
                // Provide a meaningful error message
                throw new errror_util_1.AppError(error.message ||
                    (0, translation_util_1.trans)('admin.error.error_page_create', {}, 'translation'), axios_1.HttpStatusCode.BadRequest);
            }
        });
    }
    updateAdmin(id, params, type) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const admin = yield this.find(id);
                if (!admin) {
                    throw new errror_util_1.AppError((0, translation_util_1.trans)('error.not_found', {}, 'errors'), axios_1.HttpStatusCode.Forbidden);
                }
                const currenAvatar = admin.avatar;
                const isUsername = yield this.exists({
                    username: params.username,
                    id: (0, typeorm_1.Not)(id),
                });
                if (isUsername) {
                    throw new errror_util_1.AppError((0, translation_util_1.trans)('username.unique', {}, 'errors'), axios_1.HttpStatusCode.Forbidden);
                }
                if (type === common_constant_1.TypeUpdateAdmin.ACCOUNT) {
                    params.status = (0, string_util_1.isTrueSet)(params.status)
                        ? status_constant_1.Status.ACTIVE
                        : status_constant_1.Status.INACTIVE;
                }
                if (!(params === null || params === void 0 ? void 0 : params.birth_date)) {
                    params.birth_date = null;
                }
                const { affected } = yield this.update({ id }, params);
                if (params.avatar && currenAvatar && affected) {
                    (0, media_util_1.removeFileInStorage)(currenAvatar);
                }
                if (affected) {
                    const updatedUser = yield this.findOne({ id });
                    return (0, dto_1.plainObject)(dto_1.AdminDto, updatedUser, true);
                }
                return null;
            }
            catch (error) {
                throw new errror_util_1.AppError(error.message ||
                    (0, translation_util_1.trans)('admin.error.error_page_edit', {}, 'translation'), axios_1.HttpStatusCode.BadRequest);
            }
        });
    }
    deleteAdmin(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const admin = yield this.find(id);
                if (!admin) {
                    throw new errror_util_1.AppError((0, translation_util_1.trans)('error.not_found', {}, 'errors'), axios_1.HttpStatusCode.Forbidden);
                }
                const currentAvatar = admin.avatar;
                const result = yield this.delete({ id });
                if (currentAvatar && result) {
                    (0, media_util_1.removeFileInStorage)(currentAvatar);
                }
                return true;
            }
            catch (error) {
                throw new errror_util_1.AppError(error.message ||
                    (0, translation_util_1.trans)('admin.error.error_page_delete', {}, 'translation'), axios_1.HttpStatusCode.BadRequest);
            }
        });
    }
}
exports.AdminService = AdminService;
//# sourceMappingURL=admin.service.js.map