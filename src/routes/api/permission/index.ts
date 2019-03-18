import assert from "assert";
import Router from "koa-router";
import {
  UserModel,
  TemporaryUserModel,
 } from "../../../services/model/userModel";

const router = new Router();

/*
  1. 用户区分零食用户、普通用户与超级管理员
  2. 零食用户记录只保留24小时
  3. 所有用户可参与评论
  4. 只有超级用户拥有权限操作文章，且其拥有禁止普通用户/零食用户评论的权限
  5. 用户登陆后需要在服务器上创建session以保留登陆状态
*/

router.get("/temporarySignUp", async (ctx, next) => {
  const { nickname, email } = ctx.query;

  try {
    assert(nickname, "用户名不可为空");
    assert(email, "邮箱不可为空");
  } catch (error) {
    // console.log(error, 'error');
    // 如何判断是什么类型的错误？
    ctx.body = error;
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

router.post("/signUp", async (ctx, next) => {
  const { nickname, email } = ctx.request.body;

  try {
    assert(nickname, "用户名不可为空");
    assert(email, "邮箱不可为空");
  } catch (error) {
    // console.log(error, 'error');
    // 如何判断是什么类型的错误？
    console.log(error, "error");
    ctx.body = error;
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
    console.error("error", error);
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
