// const HTTPBaseError = require('./http_base_error');
import HTTPBaseError from "./http_base_error";

const ERROR_CODE = 404000;

class ResourceNotFoundError extends HTTPBaseError {

  constructor(methodName: string, resourceId: string, httpMsg: string) {
    super(404, httpMsg, ERROR_CODE, `${methodName} not found, id: ${resourceId}`);
  }
}

export {
  ResourceNotFoundError,
};
