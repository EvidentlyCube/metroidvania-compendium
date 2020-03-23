import { Dependencies } from '../core/Dependencies';
import { Context, Next } from 'koa';
import { ApiError } from '../core/ApiError';
import json from 'koa-json';
const cors = require('@koa/cors');

export function registerMiddlewares(deps: Dependencies): void {
	deps.application.use(cors());
	deps.application.use(json());
	deps.application.use(async (ctx: Context, next: Next) => {
		try {
			ctx.body = {
				error: null,
				stacktrace: null,
				data: await next(),
			};
		} catch (error) {
			if (error instanceof ApiError) {
				ctx.status = error.statusCode;
			}

			ctx.body = {
				error: error.message,
				stacktrace: error.stack,
				data: null,
			};
		}
	});
}
