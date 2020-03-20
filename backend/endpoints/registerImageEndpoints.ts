import { Dependencies } from '../core/Dependencies';
import { Image } from '../database/entities/Image';
import { Context } from 'koa';

export function registerImageEndpoints(deps: Dependencies): void {
	deps.router.get('/images/:id', async (ctx: Context) => {
		return await deps.endpointFactory.getOneById(Image, ctx);
	});

	deps.router.get('/images', async (ctx: Context) => {
		return await deps.endpointFactory.getManyWithFilters(Image, { id: 'id' }, ctx);
	});
}
