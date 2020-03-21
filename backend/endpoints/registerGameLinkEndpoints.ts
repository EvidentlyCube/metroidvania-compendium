import { GameLink } from '../database/entities/GameLink';
import { Dependencies } from '../core/Dependencies';
import { Context } from 'koa';

const supportGameLinkFilters = {
	id: 'id',
	gameId: 'gameId',
};

export function registerGameLinkEndpoints(deps: Dependencies): void {
	deps.router.get('/game-links/:id', async (ctx: Context) => {
		return await deps.endpointFactory.getOneById(GameLink, ctx);
	});

	deps.router.get('/game-links', async (ctx: Context) => {
		return await deps.endpointFactory.getManyWithFilters(GameLink, supportGameLinkFilters, ctx);
	});
}
