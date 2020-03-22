import { AbilityCategory } from '../database/entities/AbilityCategory';
import { Dependencies } from '../core/Dependencies';
import { Context } from 'koa';

export function registerAbilityCategoryEndpoints(deps: Dependencies): void {
	deps.router.get('/ability-categories/:id', async (ctx: Context) => {
		return await deps.endpointFactory.getOneById(AbilityCategory, ctx);
	});

	deps.router.get('/ability-categories', async (ctx: Context) => {
		return await deps.endpointFactory.getManyWithFilters(AbilityCategory, { id: 'id' }, ctx);
	});
}
