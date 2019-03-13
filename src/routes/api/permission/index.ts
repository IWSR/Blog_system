import assert from "assert";
import Router from "koa-router";
import {
  UserModel,
  TemporaryUserModel,
 } from "../../../services/model/userModel";

const router = new Router();

router.get("/temporaryLogin", async (ctx, next) => {
  const { nickname, email } = ctx.query;

  try {
    assert(nickname, "用户名不可为空");
    assert(email, "邮箱不可为空");
  } catch (error) {
    // console.log(error, 'error');
    // 如何判断是什么类型的错误？
    ctx.body = error;
    next();
  }
  // TemporaryUserModel
  const TemporaryUser = new TemporaryUserModel({
    nickname,
    email,
  });
  /*
    存入临时用户表
    临时用户需要在24小时内清除
    schema内设置了过期时间
  */
  try {
    // 该条数据不存在即返回null
    const existingUser = await TemporaryUserModel.findOne({
      nickname,
      email,
    });

    if (!existingUser) {
      await TemporaryUser.save();
    } else {
      // 返回报错 已存在该条数据
      ctx.body = "已存在该数据";
    }
  } catch (error) {
    // console.error('error', error);
  }
});

router.post("/signup", async (ctx, next) => {
  const { nickname, email } = ctx.query;

  try {
    assert(nickname, "用户名不可为空");
    assert(email, "邮箱不可为空");
  } catch (error) {
    // console.log(error, 'error');
    // 如何判断是什么类型的错误？
    ctx.body = error;
    next();
  }
  // UserModel
  const User = new UserModel({
    nickname,
    email,
  });

  try {
    // 该条数据不存在即返回null
    const existingUser = await UserModel.findOne({
      nickname,
      email,
    });

    if (!existingUser) {
      await User.save();
    } else {
      // 返回报错 已存在该条数据
      ctx.body = "已存在该用户";
    }
  } catch (error) {
    // console.error('error', error);
  }

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
