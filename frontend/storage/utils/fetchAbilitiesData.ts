import { ApiRequests } from './apiRequestManager';
import { AbilityExample } from '../models/AbilityExample';
import { Ability } from '../models/Ability';
import { AbilityGroup } from '../models/AbilityGroup';
import { AbilityCategory } from '../models/AbilityCategory';

export const FetchAbilities = {
	lookupAbilityExamplesByGameId: async function(gameId: number) {
		try {
			return await ApiRequests.get<Array<AbilityExample>>(`ability-examples`, { gameId: gameId });
		} catch (error) {
			throw new Error(error);
		}
	},
	lookupAbilitiesByIds: async function(ids: number[]) {
		try {
			return await ApiRequests.get<Array<Ability>>(`abilities/`, { id: ids });
		} catch (error) {
			throw new Error(error);
		}
	},
	lookupAbilityGroupsByIds: async function(ids: number[]) {
		try {
			return await ApiRequests.get<Array<AbilityGroup>>(`ability-groups/`, { id: ids });
		} catch (error) {
			throw new Error(error);
		}
	},
	lookupAbilityCategoriesByIds: async function(ids: number[]) {
		try {
			return await ApiRequests.get<Array<AbilityCategory>>(`ability-categories/`, { id: ids });
		} catch (error) {
			throw new Error(error);
		}
	},
};
