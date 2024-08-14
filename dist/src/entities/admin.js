"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = void 0;
const typeorm_1 = require("typeorm");
const class_transformer_1 = require("class-transformer");
const encryption_util_1 = require("../utils/encryption.util");
let Admin = class Admin {
};
exports.Admin = Admin;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)()
], Admin.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' })
], Admin.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', unique: true })
], Admin.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        transformer: encryption_util_1.transformerPassword,
        nullable: false,
    }),
    (0, class_transformer_1.Exclude)()
], Admin.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true })
], Admin.prototype, "full_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true })
], Admin.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true })
], Admin.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true })
], Admin.prototype, "birth_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true })
], Admin.prototype, "avatar", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' })
], Admin.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' })
], Admin.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamp',
        nullable: false,
    })
], Admin.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'timestamp',
        nullable: false,
    })
], Admin.prototype, "updated_at", void 0);
exports.Admin = Admin = __decorate([
    (0, typeorm_1.Entity)({ name: 'admins' }),
    (0, typeorm_1.Unique)(['email'])
], Admin);
//# sourceMappingURL=admin.js.map