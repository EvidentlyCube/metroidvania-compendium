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

export const FetchGame = {
	findGamesById: async function(id: number) {
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
	environments: async function(gameId: number) {
		try {
			const gameEnvironments = await ApiRequests.get<Array<GameEnvironment>>(`game-environments`, { gameId: gameId });
			return await ApiRequests.get<Array<Environment>>('environments/', { id: getUniqueValues(gameEnvironments, 'environmentId') });
		} catch (error) {
			throw new Error(error);
		}
	},
	boxArt: async function(gameId: number) {
		try {
			const game = await ApiRequests.get<Game>(`games/${gameId}`, {});
			if (game.imageId) {
				return await ApiRequests.get<Image>(`images/${game.imageId}`, {});
			} else {
				return null;
			}
		} catch (error) {
			throw new Error(error);
		}
	},
	abilitiesListData: async function(gameId: number) {
		try {
			const abilityExamples = await ApiRequests.get<Array<AbilityExample>>(`ability-examples`, { gameId: gameId });
			const abilities = await ApiRequests.get<Array<Ability>>(`abilities/`, { id: getUniqueValues(abilityExamples, 'abilityId') });
			const abilityGroups = await ApiRequests.get<Array<AbilityGroup>>(`ability-groups/`, { id: getUniqueValues(abilities, 'groupId') });
			const abilityCategories = await ApiRequests.get<Array<AbilityCategory>>(`ability-groups/`, {
				id: getUniqueValues(abilityGroups, 'categoryId'),
			});
			return createGameAbilitiesListData({
				abilityExamples,
				abilities: mapValues(abilities, 'id'),
				abilityGroups: mapValues(abilityGroups, 'id'),
				abilityCategories: mapValues(abilityCategories, 'id'),
			});
		} catch (error) {
			throw new Error(error);
		}
	},
};

function getUniqueValues<TEntity, TField extends keyof TEntity>(values: Array<TEntity>, field: TField): Array<TEntity[TField]> {
	const set = new Set(values.map(x => x[field]));
	return Array.from(set.values());
}
function mapValues<TEntity, TField extends keyof TEntity>(models: Array<TEntity>, field: TField): Map<TEntity[TField], TEntity> {
	const map: Map<TEntity[TField], TEntity> = new Map();
	models.forEach(model => map.set(model[field], model));
	return map;
}
