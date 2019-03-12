import Koa from "koa";
import { errorHandler } from "./middlewares/error_handler";
import bodyParse from "koa-bodyparser";
import { ResourceNotFoundError } from "./errors/resource_not_found_error";
import { apiRouters } from "./routes/api/index";
import session from "koa-session";
import { db } from "./services/mongodb_connection";
console.log(db);

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
app.use(async (ctx: any, next: any) => {
  try {
    await next();
  } catch (err) {
    errorHandler(ctx, next, err);
  }
});

app.use(bodyParse());

app.use(session(sessionConfig, app));

// app.use((ctx, next) => {

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
