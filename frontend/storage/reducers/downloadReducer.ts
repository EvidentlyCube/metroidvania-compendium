import { AppStore, SET_GAMES, AppActions } from '../common';
import { Game } from '../models/Game';

export function downloadReducer(state: AppStore, action: AppActions): AppStore {
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
		default:
			return state;
	}
}
