import * as Koa from "koa";
import { errorHandler } from "./middlewares/error_handler";
import * as bodyParse from "koa-bodyparser";
import { ResourceNotFoundError } from "./errors/resource_not_found_error";
import { apiRouters } from "./routes/api/index";

const app = new Koa();

// 错误处理
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    await errorHandler(ctx, next, err);
  }
});

app.use(bodyParse());

app.use(apiRouters.routes()).use(apiRouters.allowedMethods());

app.use(async (ctx, next) => {
  if (ctx.response.status === 404) {
    throw new ResourceNotFoundError(ctx.request.method, ctx.request.url, "没有找到您所需要的资源");
  }
});

app.listen(3000);
