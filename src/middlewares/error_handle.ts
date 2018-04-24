// 日志处理
import * as winston from "winston";

const { Logger, transports } = winston;
const { DailyRotateFile, Console } = transports;
