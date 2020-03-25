import { AppStore, SET_GAMES, AppActions, SET_GAME_DATA } from '../common';
import { Game } from '../models/Game';

export function dataLoadReducer(state: AppStore, action: AppActions): AppStore {
	switch (action.type) {
		case SET_GAMES: {
			const data: Map<number, Game> = new Map();
			for (const game of action.games) {
				data.set(game.id, game);
			}
			return {
				...state,
				games: data,
			};
		}
		case SET_GAME_DATA: {
			const games = new Map(state.games);
			games.set(action.game.id, action.game);
			const gameSeries = new Map(state.gameSeries);
			gameSeries.set(action.gameSeries.id, action.gameSeries);
			const images = new Map(state.images);
			if (action.image) {
				images.set(action.image.id, action.image);
			}
			const gameEnvironments = [...state.gameEnvironments];
			for (const gameEnvironment of action.gameEnvironments) {
				if (!gameEnvironments.some(arrayGameEnvironment => arrayGameEnvironment.gameId === gameEnvironment.gameId)) {
					gameEnvironments.push(gameEnvironment);
				}
			}
			const environments = new Map();
			for (const environment of action.environments) {
				environments.set(environment.id, environment);
			}
			return {
				...state,
				games,
				gameSeries,
				gameEnvironments,
				images,
				environments,
			};
		}
		default:
			return state;
	}
}
