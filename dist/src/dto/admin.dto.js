"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminDto = void 0;
const class_transformer_1 = require("class-transformer");
const configs_1 = require("../configs");
class AdminDto {
}
exports.AdminDto = AdminDto;
__decorate([
    (0, class_transformer_1.Expose)()
], AdminDto.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], AdminDto.prototype, "username", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], AdminDto.prototype, "email", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], AdminDto.prototype, "full_name", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], AdminDto.prototype, "address", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], AdminDto.prototype, "phone", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], AdminDto.prototype, "birth_date", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Transform)(({ value }) => {
        if (!value)
            return;
        return configs_1.env.app.url + value;
    })
], AdminDto.prototype, "avatar", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], AdminDto.prototype, "role", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], AdminDto.prototype, "status", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], AdminDto.prototype, "created_at", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], AdminDto.prototype, "updated_at", void 0);
//# sourceMappingURL=admin.dto.js.map