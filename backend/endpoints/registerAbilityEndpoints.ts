import { Ability } from '../database/entities/Ability';
import { Dependencies } from '../core/Dependencies';
import { Context } from 'koa';

const supportAbilityFilters = {
	id: 'id',
	groupId: 'groupId',
};

export function registerAbilityEndpoints(deps: Dependencies): void {
	deps.router.get('/abilities/:id', async (ctx: Context) => {
		return await deps.endpointFactory.getOneById(Ability, ctx);
	});

	deps.router.get('/abilities', async (ctx: Context) => {
		return await deps.endpointFactory.getManyWithFilters(Ability, supportAbilityFilters, ctx);
	});
}
