import * as Router from "koa-router";
import loginRouter from "./login";
import userRouter from "./user";

const routers = new Router();

routers.get("/", (ctx, next) => {
  ctx.body = "hello world";
});

routers.use("/login", loginRouter.routes(), loginRouter.allowedMethods());
routers.use("/user", userRouter.routes(), userRouter.allowedMethods());

export const apiRouters = routers;
