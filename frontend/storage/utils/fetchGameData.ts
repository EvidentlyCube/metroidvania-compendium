import { GameSeries } from '../models/GameSeries';
import { Game } from '../models/Game';
import { ApiRequests } from './apiRequestManager';
import { GameEnvironment } from '../models/GameEnvironment';
import { AbilityExample } from '../models/AbilityExample';
import { Ability } from '../models/Ability';
import { AbilityGroup } from '../models/AbilityGroup';
import { AbilityCategory } from '../models/AbilityCategory';
import { createGameAbilitiesListData } from './createGameAbilitiesListData';
import { Image } from '../models/Image';
import { Environment } from '../models/Environment';
import { FetchHelperFunctions } from './fetchHelperFunctions';

export const FetchGame = {
	findGameById: async function(id: number) {
		try {
			return await ApiRequests.get<Game>(`games/${id}`, {});
		} catch (error) {
			throw new Error(error);
		}
	},
	findSeriesById: async function(id: number) {
		try {
			return await ApiRequests.get<GameSeries>(`game-series/${id}`, {});
		} catch (error) {
			throw new Error(error);
		}
	},
	lookupGameEnvironmentsByGameId: async function(gameId: number) {
		try {
			return await ApiRequests.get<Array<GameEnvironment>>(`game-environments`, { gameId: gameId });
		} catch (error) {
			throw new Error(error);
		}
	},
	lookupEnvironmentsByIds: async function(environemntIds: number[]) {
		try {
			return await ApiRequests.get<Array<Environment>>('environments/', { id: environemntIds });
		} catch (error) {
			throw new Error(error);
		}
	},
	findImageById: async function(id: number) {
		try {
			return await ApiRequests.get<Image>(`images/${id}`, {});
		} catch (error) {
			throw new Error(error);
		}
	},
	abilitiesListData: async function(gameId: number) {
		try {
			const abilityExamples = await ApiRequests.get<Array<AbilityExample>>(`ability-examples`, { gameId: gameId });
			const abilities = await ApiRequests.get<Array<Ability>>(`abilities/`, { id: FetchHelperFunctions.getUniqueValues(abilityExamples, 'abilityId') });
			const abilityGroups = await ApiRequests.get<Array<AbilityGroup>>(`ability-groups/`, {
				id: FetchHelperFunctions.getUniqueValues(abilities, 'groupId'),
			});
			const abilityCategories = await ApiRequests.get<Array<AbilityCategory>>(`ability-groups/`, {
				id: FetchHelperFunctions.getUniqueValues(abilityGroups, 'categoryId'),
			});

			return createGameAbilitiesListData({
				abilityExamples,
				abilities: FetchHelperFunctions.mapValues(abilities, 'id'),
				abilityGroups: FetchHelperFunctions.mapValues(abilityGroups, 'id'),
				abilityCategories: FetchHelperFunctions.mapValues(abilityCategories, 'id'),
			});
		} catch (error) {
			throw new Error(error);
		}
	},
};
