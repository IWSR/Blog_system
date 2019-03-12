"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HTTPBaseError extends Error {
    constructor(httpStatusCode, httpMsg, errCode, msg) {
        super(`HTTP ERROR: ${msg}`);
        this.httpStatusCode = httpStatusCode;
        this.httpMsg = httpMsg;
        this.errCode = errCode;
    }
}
exports.default = HTTPBaseError;
//# sourceMappingURL=http_base_error.js.map