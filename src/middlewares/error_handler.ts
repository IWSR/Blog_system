import HTTPBaseError from "../errors/http_base_error";
import logger from "../utils/loggers/logger";

async function handler(ctx, next, err) {
  if (err instanceof HTTPBaseError) {
    const errMeta = {
      statusCode: ctx.status,
      query: ctx.query,
      origin: ctx.origin,
      url: ctx.originalUrl,
      // userInfo: ctx.req.user,
    };
    logger.error(err.message, errMeta);
    ctx.response.status = err.httpStatusCode;
    ctx.response.body = {
      code: err.errCode,
      msg: err.httpMsg,
    };
  } else {
    await next();
  }
}

export const errorHandler = handler;
