import { AppStore, SET_GAME_VISIBILITY, AppActions } from '../common';

export function gameVisibilityReducer(state: AppStore, action: AppActions): AppStore {
	switch (action.type) {
		case SET_GAME_VISIBILITY: {
			const newGamesVisibility = new Map(state.gamesVisibility);
			newGamesVisibility.set(action.gameId, action.gamesVisibility);
			return {
				...state,
				gamesVisibility: newGamesVisibility,
			};
		}
		default:
			return state;
	}
}
