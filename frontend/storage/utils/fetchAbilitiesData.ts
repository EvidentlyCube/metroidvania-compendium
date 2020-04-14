import { ApiRequests } from './apiRequestManager';
import { AbilityExample } from '../models/AbilityExample';
import { Ability } from '../models/Ability';
import { AbilityGroup } from '../models/AbilityGroup';
import { AbilityCategory } from '../models/AbilityCategory';

export const FetchAbilities = {
	lookupAbilityExamplesByGameId: async function(gameId: number) {
		return await ApiRequests.get<AbilityExample[]>(`ability-examples`, { gameId: gameId });
	},
	lookupAbilitiesByIds: async function(ids: number[]) {
		return await ApiRequests.get<Ability[]>(`abilities/`, { id: ids });
	},
	lookupAbilityGroupsByIds: async function(ids: number[]) {
		return await ApiRequests.get<AbilityGroup[]>(`ability-groups/`, { id: ids });
	},
	lookupAbilityCategoriesByIds: async function(ids: number[]) {
		return await ApiRequests.get<AbilityCategory[]>(`ability-categories/`, { id: ids });
	},
};
