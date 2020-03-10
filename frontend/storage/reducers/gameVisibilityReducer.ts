import { AppStore, SET_GAME_VISIBILITY, AppActions } from '../common';

export function gameVisibilityReducer(state: AppStore, action: AppActions): AppStore {
	console.log(action);
	switch (action.type) {
		case SET_GAME_VISIBILITY: {
			if (state.gamesVisibility.has(action.gameId)) {
				const newGamesVisibility = new Map(state.gamesVisibility);
				newGamesVisibility.set(action.gameId, action.gamesVisibility);
				return {
					...state,
					gamesVisibility: newGamesVisibility,
				};
			}
			return state;
		}
		default:
			return state;
	}
}
