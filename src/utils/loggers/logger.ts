import * as winston from "winston";
import "winston-daily-rotate-file";

// import setting = require("../../../setting");
import { loggerSetting } from "../../../setting";

const { Logger, transports } = winston;
const { DailyRotateFile, Console } = transports;

const logger = new Logger({
  transports: [
    new DailyRotateFile({
      name: "base_logger",
      filename: `${loggerSetting.filePath}/info/%DATE%.info.log`,
      prepend: false,
      datePattern: "YYYY-MM-DD",
      level: "info",
    }),
    new DailyRotateFile({
      name: "error_logger",
      filename: `${loggerSetting.filePath}/error/%DATE%.error.log`,
      prepend: false,
      datePattern: "YYYY-MM-DD",
      level: "error",
    }),
  ],
});

export default logger;
