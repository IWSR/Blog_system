import * as Koa from "koa";
import * as bodyParse from "koa-bodyparser";
import { ResourceNotFoundError } from "./errors/resource_not_found_error";
import { apiRouters } from "./routes/api/index";

const app = new Koa();

// app.use(bodyParse());

app.use(apiRouters.routes()).use(apiRouters.allowedMethods());

app.use((ctx, next) => {
  if (ctx.response.status === 404) {
    // console.log(ctx);
    // next(new ResourceNotFoundError(ctx.request.method, ctx.request.url, "没有找到您所需要的资源"));
    ctx.state.errorObject = new ResourceNotFoundError(ctx.request.method, ctx.request.url, "没有找到您所需要的资源");
    next();
  }
});

app.use((ctx, next) => {
  // 错误处理器
  console.log(ctx.state.errorObject, 'error');
});

app.listen(3000);
