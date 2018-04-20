import * as Koa from "koa";
import * as bodyParse from "koa-bodyparser";
import { apiRouters } from "./routes/api/index";

const app = new Koa();

app.use(bodyParse());

app.use(apiRouters.routes()).use(apiRouters.allowedMethods());

app.listen(3000);
