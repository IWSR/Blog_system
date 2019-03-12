import mongoose from "mongoose";
import config from "../config/connection.json";

mongoose.Promise = Promise;
mongoose.connect(config.setting.uri);
const db = mongoose.connection;

db.on("open", () => {
  console.log("success");
});

db.on("error", (e) => {
  console.log(e, "error");
});

export {
  db,
};
