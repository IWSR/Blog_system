import mongoose from "mongoose";

const { Schema } = mongoose;

// 注册用户
const UserSchema = new Schema({
  createTime: {
    type: Date,
    default: Date.now,
  },
  nickname: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
  },
  personalSite: {
    type: String,
  },
});

// 临时用户
const TemporaryUserSchema = new Schema({
  createTime: {
    type: Date,
    default: Date.now,
    expires: 60 * 60 * 24,
  },
  nickname: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  personalSite: {
    type: String,
  },
});

const UserModel = mongoose.model("User", UserSchema);
const TemporaryUserModel = mongoose.model("TemporaryUser", TemporaryUserSchema);

export {
  UserModel,
  TemporaryUserModel,
};
