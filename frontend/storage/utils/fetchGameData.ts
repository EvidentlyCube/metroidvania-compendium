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
export async function fetchGameBoxData(gameId: number) {
	try {
		const game: Game = await ApiRequests.get(`games/${gameId}`, {});
		const gameEnvironments: Array<GameEnvironment> = await ApiRequests.get(`game-environments`, { gameId: gameId });
		let image: Image;
		if (game.imageId) {
			image = await ApiRequests.get(`images/${game.imageId}`, {});
		} else {
			image = DefaultImage;
		}
		const environments: Array<Environment> = await ApiRequests.get('environments/', { id: unique(gameEnvironments.map(x => x.environmentId)) });
		return { image, environments };
	} catch (error) {
		throw new Error(error);
	}
}
export async function fetchGameAbilitiesListData(gameId: number) {
	try {
		const abilityExamples: Array<AbilityExample> = await ApiRequests.get(`ability-examples`, { gameId: gameId });
		const abilities: Array<Ability> = await ApiRequests.get(`abilities/`, { id: unique(abilityExamples.map(x => x.abilityId)) });
		const abilityGroups: Array<AbilityGroup> = await ApiRequests.get(`ability-groups/`, { id: unique(abilities.map(x => x.groupId)) });
		const abilityCategories: Array<AbilityCategory> = await ApiRequests.get(`ability-groups/`, { id: unique(abilityGroups.map(x => x.categoryId)) });
		return createGameAbilitiesListData({
			abilityExamples,
			abilities: mapValues(abilities, 'id'),
			abilityGroups: mapValues(abilityGroups, 'id'),
			abilityCategories: mapValues(abilityCategories, 'id'),
		});
	} catch (error) {
		throw new Error(error);
	}
}
function unique<T>(values: Array<T>): Array<T> {
	const set = new Set(values);
	return Array.from(set.values());
}
function mapValues<TEntity, TField extends keyof TEntity>(models: Array<TEntity>, field: TField): Map<TEntity[TField], TEntity> {
	const map: Map<TEntity[TField], TEntity> = new Map();
	models.forEach(model => map.set(model[field], model));
	return map;
}
