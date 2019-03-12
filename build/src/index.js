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
const koa_1 = __importDefault(require("koa"));
const error_handler_1 = require("./middlewares/error_handler");
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const resource_not_found_error_1 = require("./errors/resource_not_found_error");
const index_1 = require("./routes/api/index");
const koa_session_1 = __importDefault(require("koa-session"));
const mongodb_connection_1 = require("./services/mongodb_connection");
console.log(mongodb_connection_1.db, "db");
const app = new koa_1.default();
const sessionConfig = {
    name: "testSession",
    key: "dasdas",
    maxAge: 86400000,
    overwrite: true,
    httpOnly: true,
    signed: true,
    rolling: false,
    renew: false,
};
app.keys = ["some secret hurr"];
// 错误处理
app.use((ctx, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        yield next();
    }
    catch (err) {
        error_handler_1.errorHandler(ctx, next, err);
    }
}));
app.use(koa_bodyparser_1.default());
app.use(koa_session_1.default(sessionConfig, app));
// app.use((ctx, next) => {
//   const userName = ctx.session.user || "";
// });
app.use(index_1.apiRouters.routes()).use(index_1.apiRouters.allowedMethods());
app.use((ctx, next) => {
    // 根据状态码抛出相应错误
    const statusCode = ctx.response.status;
    switch (statusCode) {
        case 404:
            throw new resource_not_found_error_1.ResourceNotFoundError(ctx.request.method, ctx.request.url, "没有找到您所需要的资源");
    }
});
app.listen(3000);
//# sourceMappingURL=index.js.map