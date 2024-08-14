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
require("reflect-metadata");
const configs_1 = require("../configs");
const datasource_1 = __importDefault(require("./datasource"));
class Database {
    constructor() {
        this.connection = this.initDataSource();
    }
    initDataSource() {
        return datasource_1.default;
    }
    connectToDatabase() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield Promise.all([this.connection.initialize()]);
                console.log('Connection has been established successfully.');
            }
            catch (error) {
                configs_1.logger.error('Unable to connect to the database:', error);
                throw error.message;
            }
        });
    }
}
exports.default = new Database();
//# sourceMappingURL=index.js.map