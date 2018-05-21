import * as winston from "winston";
import "winston-daily-rotate-file";

import { loggerSetting } from "../../../setting";

// console.log(loggerSetting, 'hahah');
// const pathD = `${localStorage.filePath}/info/info.log`;
// console.log(pathD, 'path');

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
      // filename: `error.log.`,
      filename: `${loggerSetting.filePath}/error/%DATE%.error.log`,
      prepend: false,
      datePattern: "YYYY-MM-DD",
      level: "error",
    }),
  ],
});

export default logger;
