import { GameSeries } from '../models/GameSeries';
import { Game } from '../models/Game';
import { ApiRequests } from './apiRequestManager';
import { GameEnvironment } from '../models/GameEnvironment';
import { Environment } from '../models/Environment';
import { DefaultImage, Image } from '../models/Image';
import { AbilityExample } from '../models/AbilityExample';
import { Ability } from '../models/Ability';
import { AbilityGroup } from '../models/AbilityGroup';
import { AbilityCategory } from '../models/AbilityCategory';
import { createGameAbilitiesListData } from './createGameAbilitiesListData';

export async function fetchGameViewData(id: number) {
	try {
		const game: Game = await ApiRequests.get(`games/${id}`, {});
		const series: GameSeries = await ApiRequests.get(`game-series/${game.seriesId}`, {});
		return { game, series };
	} catch (error) {
		throw new Error(error);
	}
}
export async function fetchGameBoxData(gameId: number, imageId: number | undefined) {
	try {
		const gameEnvironments: Array<GameEnvironment> = await ApiRequests.get(`game-environments`, { gameId: gameId });
		let image: Image;
		if (imageId) {
			image = await ApiRequests.get(`images/${imageId}`, {});
		} else {
			image = DefaultImage;
		}
		const environments: Array<Environment> = new Array();
		for (const gameEnvironment of gameEnvironments) {
			environments.push(await ApiRequests.get('environments/' + gameEnvironment.environmentId, {}));
		}
		return { image, environments };
	} catch (error) {
		throw new Error(error);
	}
}
export async function fetchGameAbilitiesListData(gameId: number) {
	try {
		const abilityExamples: Array<AbilityExample> = await ApiRequests.get(`ability-examples`, { gameId: gameId });
		const idsToFetch: Set<number> = new Set();
		for (const abilityExample of abilityExamples) {
			idsToFetch.add(abilityExample.abilityId);
		}
		const abilities: Array<Ability> = await ApiRequests.get(`abilities/`, { id: Array.from(idsToFetch.values()) });
		const abilitiesMap: Map<number, Ability> = new Map();
		idsToFetch.clear();
		for (const ability of abilities) {
			idsToFetch.add(ability.groupId);
			abilitiesMap.set(ability.id, ability);
		}
		const abilityGroups: Array<AbilityGroup> = await ApiRequests.get(`ability-groups/`, { id: Array.from(idsToFetch.values()) });
		idsToFetch.clear();
		const abilityGroupsMap: Map<number, AbilityGroup> = new Map();
		for (const abilityGroup of abilityGroups) {
			idsToFetch.add(abilityGroup.categoryId);
			abilityGroupsMap.set(abilityGroup.id, abilityGroup);
		}
		const abilityCategories: Array<AbilityCategory> = await ApiRequests.get(`ability-groups/`, { id: Array.from(idsToFetch.values()) });
		const abilityCategoriesMap: Map<number, AbilityCategory> = new Map();
		for (const abilityCategory of abilityCategories) {
			abilityCategoriesMap.set(abilityCategory.id, abilityCategory);
		}
		return createGameAbilitiesListData({
			abilityExamples,
			abilities: abilitiesMap,
			abilityGroups: abilityGroupsMap,
			abilityCategories: abilityCategoriesMap,
		});
	} catch (error) {
		throw new Error(error);
	}
}
