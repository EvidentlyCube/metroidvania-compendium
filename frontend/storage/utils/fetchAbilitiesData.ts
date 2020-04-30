import { ApiRequests } from './apiRequestManager';
import { AbilityExample } from '../models/AbilityExample';
import { Ability } from '../models/Ability';
import { AbilityGroup } from '../models/AbilityGroup';
import { AbilityCategory } from '../models/AbilityCategory';
import { AbilityVariant } from '../models/AbilityVariant';

export const FetchAbilities = {
	lookupAbilityExamplesByAbilityId: async function(id: number) {
		return await ApiRequests.get<AbilityExample[]>(`ability-examples`, { abilityId: id });
	},
	lookupAbilityExamplesByGameId: async function(gameId: number) {
		return await ApiRequests.get<AbilityExample[]>(`ability-examples`, { gameId: gameId });
	},
	findAbilityById: async function(id: number) {
		return await ApiRequests.get<Ability>(`abilities/${id}`, {});
	},
	lookupAbilities: async function() {
		return await ApiRequests.get<Ability[]>(`abilities/`, {});
	},
	lookupAbilitiesByIds: async function(ids: number[]) {
		return await ApiRequests.get<Ability[]>(`abilities/`, { id: ids });
	},
	lookupAbilityGroupsByIds: async function(ids: number[]) {
		return await ApiRequests.get<AbilityGroup[]>(`ability-groups/`, { id: ids });
	},
	findAbilityGroupById: async function(id: number) {
		return await ApiRequests.get<AbilityGroup>(`ability-groups/${id}`, {});
	},
	lookupAbilityCategoriesByIds: async function(ids: number[]) {
		return await ApiRequests.get<AbilityCategory[]>(`ability-categories/`, { id: ids });
	},
	findAbilityCategoryById: async function(id: number) {
		return await ApiRequests.get<AbilityCategory>(`ability-categories/${id}`, {});
	},
	lookupAbilityVariantsById: async function(id: number) {
		return await ApiRequests.get<AbilityVariant[]>(`ability-variants/`, { id: id });
	},
};
