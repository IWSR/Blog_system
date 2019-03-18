import assert from "assert";
import Router from "koa-router";

const router = new Router();

/*
  1. 拥有操作文章权限的只有超级管理员
  2. 文章格式由markdown构成（markdown-it）
  3. 前端可以考虑https://rexxars.github.io/react-markdown/
*/
router.post("/add", async (ctx, next) => {
  // 校验用户权限是否为超级管理员
  console.log(ctx);
});

export default router;
