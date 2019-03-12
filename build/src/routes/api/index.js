"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const permission_1 = __importDefault(require("./permission"));
const user_1 = __importDefault(require("./user"));
const routers = new koa_router_1.default();
routers.get("/", (ctx, next) => {
    ctx.body = "hello world";
});
routers.use("/permission", permission_1.default.routes(), permission_1.default.allowedMethods());
routers.use("/user", user_1.default.routes(), user_1.default.allowedMethods());
exports.apiRouters = routers;
//# sourceMappingURL=index.js.map