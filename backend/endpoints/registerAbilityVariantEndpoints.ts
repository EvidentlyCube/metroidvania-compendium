import { AbilityVariant } from '../database/entities/AbilityVariant';
import { Dependencies } from '../core/Dependencies';
import { Context } from 'koa';

const supportAbilityVariantFilters = {
	id: 'id',
	abilityId: 'abilityId',
};

export function registerAbilityVariantEndpoints(deps: Dependencies): void {
	deps.router.get('/ability-variants/:id', async (ctx: Context) => {
		return await deps.endpointFactory.getOneById(AbilityVariant, ctx);
	});

	deps.router.get('/ability-variants', async (ctx: Context) => {
		return await deps.endpointFactory.getManyWithFilters(AbilityVariant, supportAbilityVariantFilters, ctx);
	});
}
