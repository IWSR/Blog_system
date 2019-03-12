"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston = __importStar(require("winston"));
require("winston-daily-rotate-file");
const setting_1 = require("./setting");
const { Logger, transports } = winston;
const { DailyRotateFile, Console } = transports;
const logger = new Logger({
    transports: [
        new DailyRotateFile({
            name: "base_logger",
            filename: `${setting_1.loggerSetting.filePath}/info/%DATE%.info.log`,
            prepend: false,
            datePattern: "YYYY-MM-DD",
            level: "info",
        }),
        new DailyRotateFile({
            name: "error_logger",
            filename: `${setting_1.loggerSetting.filePath}/error/%DATE%.error.log`,
            prepend: false,
            datePattern: "YYYY-MM-DD",
            level: "error",
        }),
    ],
});
exports.default = logger;
//# sourceMappingURL=logger.js.map