"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connection_json_1 = __importDefault(require("../config/connection.json"));
mongoose_1.default.Promise = Promise;
mongoose_1.default.connect(connection_json_1.default.setting.uri, { useMongoClient: true });
const db = mongoose_1.default.connection;
exports.db = db;
db.on("open", () => {
    console.log("success");
});
db.on("error", (e) => {
    console.log(e, "error");
});
//# sourceMappingURL=mongodb_connection.js.map