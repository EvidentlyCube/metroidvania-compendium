import { GameSeries } from '../database/entities/GameSeries';
import { Dependencies } from '../core/Dependencies';
import { Context } from 'koa';

export function registerGameSeriesEndpoints(deps: Dependencies): void {
	deps.router.get('/game-series/:id', async (ctx: Context) => {
		return await deps.endpointFactory.getOneById(GameSeries, ctx);
	});

	deps.router.get('/game-series', async (ctx: Context) => {
		return await deps.endpointFactory.getManyWithFilters(GameSeries, { id: 'id' }, ctx);
	});
}
