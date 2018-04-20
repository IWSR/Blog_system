import * as Koa from "koa";
import { apiRouters } from "./routes/api/index";

const app = new Koa();

app.use(apiRouters.routes()).use(apiRouters.allowedMethods());

app.listen(3000);
