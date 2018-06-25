import * as Router from "koa-router";

const router = new Router();

router.get("/", (ctx, next) => {
  // ctx.response.set("Set-Cookie", "userName=hahaha");
  const { username } = ctx.query;
  // const session = ctx.session;
  ctx.session = {};
  // ctx.session.user = username;
  // ctx.session.wahaha = "wahaha";
  ctx.body = "login";
});

router.get("/hello", (ctx, next) => {
  // if (ctx.cookies.get("userName")) {
  //   ctx.body = "<h1>肥宅快乐饼</h1>";
  // }
  const userName = ctx.session.user;
  ctx.body = `hello ${userName}`;
});

export default router;
