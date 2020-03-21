import { AbilityGroup } from '../database/entities/AbilityGroup';
import { Dependencies } from '../core/Dependencies';
import { Context } from 'koa';

const supportAbilityGroupFilters = {
	id: 'id',
	categoryId: 'categoryId',
};

export function registerAbilityGroupEndpoints(deps: Dependencies): void {
	deps.router.get('/ability-groups/:id', async (ctx: Context) => {
		return await deps.endpointFactory.getOneById(AbilityGroup, ctx);
	});

	deps.router.get('/ability-groups', async (ctx: Context) => {
		return await deps.endpointFactory.getManyWithFilters(AbilityGroup, supportAbilityGroupFilters, ctx);
	});
}
