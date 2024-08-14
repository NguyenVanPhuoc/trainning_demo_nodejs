"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeFileInStorage = exports.formDataNoFile = exports.uploadSingle = exports.upload = void 0;
const path_1 = __importDefault(require("path"));
const multer_1 = __importDefault(require("multer"));
const common_constant_1 = require("../constants/common.constant");
const translation_util_1 = require("../utils/translation.util");
const process = __importStar(require("process"));
const fs_1 = require("fs");
const MAXSIZE = common_constant_1.Image.MAXSIZE;
const fileFilter = (req, file, cb) => {
    if (file.mimetype.includes('image/')) {
        cb(null, true);
    }
    else {
        cb(new Error((0, translation_util_1.trans)('image.mimetype', {}, 'errors')));
    }
};
const storageUpload = (filePath) => {
    return multer_1.default.diskStorage({
        destination: function (request, file, callback) {
            callback(null, path_1.default.join(process.cwd(), 'public'));
        },
        filename: function (request, file, callback) {
            const [, fileExtension] = file.originalname.split('.');
            callback(null, filePath + '-' + Date.now() + '.' + fileExtension);
        },
    });
};
const upload = (storage) => {
    return (0, multer_1.default)({
        storage: storage,
        limits: {
            fileSize: MAXSIZE,
        },
        fileFilter: fileFilter,
    });
};
exports.upload = upload;
const uploadSingle = (input, path) => {
    const storage = storageUpload(path);
    return (0, exports.upload)(storage).single(input);
};
exports.uploadSingle = uploadSingle;
// Middleware để xử lý form-data không có file
const formDataNoFile = () => {
    return (0, multer_1.default)().none();
};
exports.formDataNoFile = formDataNoFile;
const removeFileInStorage = (filePath) => {
    if (!filePath)
        return;
    const fullPath = path_1.default.join(process.cwd(), 'public', filePath);
    if ((0, fs_1.existsSync)(fullPath)) {
        (0, fs_1.unlinkSync)(fullPath);
    }
};
exports.removeFileInStorage = removeFileInStorage;
//# sourceMappingURL=media.util.js.map