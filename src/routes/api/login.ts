import * as Router from "koa-router";

const router = new Router();

router.get("/", (ctx, next) => {
  const { username } = ctx.query;
  ctx.body = "login";
});

router.get("/hello", (ctx, next) => {
  const userName = ctx.session.user;
  ctx.body = `hello ${userName}`;
});

export default router;
