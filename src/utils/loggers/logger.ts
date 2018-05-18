import * as winston from "winston";
import "winston-daily-rotate-file";

const { Logger, transports } = winston;
const { DailyRotateFile, Console } = transports;

const logger = new Logger({
  transports: [
    new DailyRotateFile({
      name: "base_logger",
      filename: `info.log.`,
      prepend: false,
      datePattern: "yyyy-MM-dd",
      level: "info",
    }),
    new DailyRotateFile({
      name: "error_logger",
      filename: `error.log.`,
      prepend: false,
      datePattern: "yyyy-MM-dd",
      level: "error",
    }),
  ],
});

export default logger;
