import * as path from "path";

interface LoggerType {
  filePath: string;
}

const loggerSetting: LoggerType = {
  filePath: path.join(__dirname, "./logs"),
};

export {
  loggerSetting,
};
