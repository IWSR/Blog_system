import * as Router from "koa-router";

const router = new Router();

router.get("/", (ctx, next) => {
  ctx.body = "user";
});

export default router;
