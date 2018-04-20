import * as Router from "koa-router";

const router = new Router();

router.post("/", (ctx, next) => {
  ctx.body = "login";
});

export default router;
