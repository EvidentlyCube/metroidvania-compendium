import { GameEnvironment } from '../database/entities/GameEnvironment';
import { Dependencies } from '../core/Dependencies';
import { Context } from 'koa';

const supportGameEnvironmentFilters = {
	id: 'id',
	gameId: 'gameId',
	environmentId: 'environmentId',
};

export function registerGameEnvironmentEndpoints(deps: Dependencies): void {
	deps.router.get('/game-environments/:id', async (ctx: Context) => {
		return await deps.endpointFactory.getOneById(GameEnvironment, ctx);
	});

	deps.router.get('/game-environments', async (ctx: Context) => {
		return await deps.endpointFactory.getManyWithFilters(GameEnvironment, supportGameEnvironmentFilters, ctx);
	});
}
