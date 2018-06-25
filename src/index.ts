import * as Koa from "koa";
import { errorHandler } from "./middlewares/error_handler";
import * as bodyParse from "koa-bodyparser";
import { ResourceNotFoundError } from "./errors/resource_not_found_error";
import { apiRouters } from "./routes/api/index";
import * as session from "koa-session";

const app = new Koa();

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
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    errorHandler(ctx, next, err);
  }
});

app.use(bodyParse());

app.use(session(sessionConfig, app));

// app.use((ctx, next) => {
//   const userName = ctx.session.user || "";
// });

app.use(apiRouters.routes()).use(apiRouters.allowedMethods());

app.use((ctx, next) => {
  // 根据状态码抛出相应错误
  const statusCode = ctx.response.status;
  switch (statusCode) {
    case 404:
      throw new ResourceNotFoundError(ctx.request.method, ctx.request.url, "没有找到您所需要的资源");
  }
});

app.listen(3000);
