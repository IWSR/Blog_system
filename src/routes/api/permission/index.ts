import Router from "koa-router";

const router = new Router();

router.post("/login", (ctx, next) => {
  const { username } = ctx.query;
  ctx.body = "login";
});

router.post("/signin", (ctx, next) => {
  const userName = ctx.session.user;
  ctx.body = `hello ${userName}`;
});

router.post("/signout", (ctx, next) => {
  const userName = ctx.session.user;
  ctx.body = `bye ${userName}`;
});

export default router;
