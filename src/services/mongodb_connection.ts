import mongoose from "mongoose";
import config from "../config/connection.json";

mongoose.Promise = Promise;
mongoose.connect(config.setting.uri, {
  useNewUrlParser: true,
}, (err) => {
  if (err) {
    // console.error('connect database error!');
    // console.error(err);
    // 结束当前进程
    return process.exit(1);
  }
});
const db = mongoose.connection;

db.on("open", () => {
  // console.log("success");
});

db.on("error", (e) => {
  // console.log(e, "error");
  return process.exit(1);
});

export {
  db,
};
