import { GameSeries } from '../models/GameSeries';
import { Game } from '../models/Game';
import { ApiRequests } from './apiRequestManager';
import { GameEnvironment } from '../models/GameEnvironment';
import { Image } from '../models/Image';
import { Environment } from '../models/Environment';

export const FetchGame = {
	findGameById: async function(id: number) {
		return await ApiRequests.get<Game>(`games/${id}`, {});
	},
	lookupGames: async function() {
		return await ApiRequests.get<Game[]>(`games/`, {});
	},
	findSeriesById: async function(id: number) {
		return await ApiRequests.get<GameSeries>(`game-series/${id}`, {});
	},
	lookupSeriesByIds: async function(ids: number[]) {
		return await ApiRequests.get<GameSeries[]>('game-series/', { id: ids });
	},
	lookupGameEnvironmentsByGameId: async function(gameId: number) {
		return await ApiRequests.get<GameEnvironment[]>(`game-environments`, { gameId: gameId });
	},
	lookupEnvironmentsByIds: async function(environemntIds: number[]) {
		return await ApiRequests.get<Environment[]>('environments/', { id: environemntIds });
	},
	findImageById: async function(id: number) {
		return await ApiRequests.get<Image>(`images/${id}`, {});
	},
	lookupImagesByIds: async function(ids: (number | undefined)[]) {
		return await ApiRequests.get<Image[]>('images', { id: ids });
	},
};
