import { AbilityExample } from '../database/entities/AbilityExample';
import { Dependencies } from '../core/Dependencies';
import { Context } from 'koa';

const supportAbilityExampleFilters = {
	id: 'id',
	abilityId: 'abilityId',
	gameId: 'gameId',
};

export function registerAbilityExampleEndpoints(deps: Dependencies): void {
	deps.router.get('/ability-examples/:id', async (ctx: Context) => {
		return await deps.endpointFactory.getOneById(AbilityExample, ctx);
	});

	deps.router.get('/ability-examples', async (ctx: Context) => {
		return await deps.endpointFactory.getManyWithFilters(AbilityExample, supportAbilityExampleFilters, ctx);
	});
}
