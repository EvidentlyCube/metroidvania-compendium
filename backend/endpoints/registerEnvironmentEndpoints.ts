import { Environment } from '../database/entities/Environment';
import { Dependencies } from '../core/Dependencies';
import { Context } from 'koa';

export function registerEnvironmentEndpoints(deps: Dependencies): void {
	deps.router.get('/environments/:id', async (ctx: Context) => {
		return await deps.endpointFactory.getOneById(Environment, ctx);
	});

	deps.router.get('/environments', async (ctx: Context) => {
		return await deps.endpointFactory.getManyWithFilters(Environment, { id: 'id' }, ctx);
	});
}
