import { GameSeries } from '../models/GameSeries';
import { Game } from '../models/Game';
import { ApiRequests } from './apiRequestManager';
import { GameEnvironment } from '../models/GameEnvironment';
import { Image } from '../models/Image';
import { Environment } from '../models/Environment';

export const FetchGame = {
	findGameById: async function(id: number) {
		try {
			return await ApiRequests.get<Game>(`games/${id}`, {});
		} catch (error) {
			throw new Error(error);
		}
	},
	lookupGames: async function() {
		try {
			return await ApiRequests.get<Array<Game>>(`games/`, {});
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
	lookupSeriesByIds: async function(ids: number[]) {
		try {
			return await ApiRequests.get<Array<GameSeries>>('game-series/', { id: ids });
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
	lookupImagesByIds: async function(ids: (number | undefined)[]) {
		try {
			return await ApiRequests.get<Array<Image>>('images', { id: ids });
		} catch (error) {
			throw new Error(error);
		}
	},
};
