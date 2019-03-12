"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_base_error_1 = __importDefault(require("../errors/http_base_error"));
const logger_1 = __importDefault(require("../utils/loggers/logger"));
function handler(ctx, next, err) {
    return __awaiter(this, void 0, void 0, function* () {
        if (err instanceof http_base_error_1.default) {
            const errMeta = {
                statusCode: ctx.status,
                query: ctx.query,
                origin: ctx.origin,
                url: ctx.originalUrl,
            };
            logger_1.default.error(err.message, errMeta);
            ctx.response.status = err.httpStatusCode;
            ctx.response.body = {
                code: err.errCode,
                msg: err.httpMsg,
            };
        }
        else {
            yield next();
        }
    });
}
exports.errorHandler = handler;
//# sourceMappingURL=error_handler.js.map