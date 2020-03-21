import { Game } from '../database/entities/Game';
import { Dependencies } from '../core/Dependencies';
import { Context } from 'koa';

const supportGameFilters = {
	id: 'id',
	seriesId: 'seriesId',
};

export function registerGameEndpoints(deps: Dependencies): void {
	deps.router.get('/games/:id', async (ctx: Context) => {
		return await deps.endpointFactory.getOneById(Game, ctx);
	});

	deps.router.get('/games', async (ctx: Context) => {
		return await deps.endpointFactory.getManyWithFilters(Game, supportGameFilters, ctx);
	});
}
