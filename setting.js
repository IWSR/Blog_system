// import * as path from "path";

// interface LoggerType {
//   filePath: string;
// }

// const loggerSetting: LoggerType = {
//   filePath: path.join(__dirname, "./logs"),
// };

// export {
//   loggerSetting,
// };

const path = require("path");

const loggerSetting = {
  filePath: path.join(__dirname, "./logs"),
};

module.exports = {
  loggerSetting,
};
