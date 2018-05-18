import HTTPBaseError from "../errors/http_base_error";
import logger from "../utils/loggers/logger";

function handler(ctx, err) {
  if (err instanceof HTTPBaseError) {
    const errMeta = {
      query: ctx.req,
      url: ctx.req.originalUrl,
      userInfo: ctx.req.user,
    };
    logger.error(err.message, errMeta);
  }
}

export const errorHandler = handler;
