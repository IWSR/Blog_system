import * as Koa from "koa";
import * as Router from "koa-router";

const app = new Koa();
const router = new Router();

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
