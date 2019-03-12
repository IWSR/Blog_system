"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const router = new koa_router_1.default();
router.post("/login", (ctx, next) => {
    const { username } = ctx.query;
    ctx.body = "login";
});
router.post("/signin", (ctx, next) => {
    const userName = ctx.session.user;
    ctx.body = `hello ${userName}`;
});
router.post("/signout", (ctx, next) => {
    const userName = ctx.session.user;
    ctx.body = `bye ${userName}`;
});
exports.default = router;
//# sourceMappingURL=index.js.map