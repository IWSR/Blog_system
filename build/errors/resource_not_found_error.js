"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_base_error_1 = __importDefault(require("./http_base_error"));
const ERROR_CODE = 404000;
class ResourceNotFoundError extends http_base_error_1.default {
    constructor(methodName, resourceId, httpMsg) {
        super(404, httpMsg, ERROR_CODE, `${methodName} not found, id: ${resourceId}`);
    }
}
exports.ResourceNotFoundError = ResourceNotFoundError;
//# sourceMappingURL=resource_not_found_error.js.map