import Router from "koa-router";
import permissionRouter from "./permission";
import userRouter from "./user";

const routers = new Router();

routers.get("/", (ctx, next) => {
  ctx.body = "hello world";
});

routers.use("/permission", permissionRouter.routes(), permissionRouter.allowedMethods());
routers.use("/user", userRouter.routes(), userRouter.allowedMethods());

export const apiRouters = routers;
