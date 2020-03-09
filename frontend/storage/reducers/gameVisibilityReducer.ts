// eslint-disable-next-line no-unused-vars
import {AppStore, SET_GAME_VISIBILITY, AppActions} from '../common';

export function gameVisibilityReducer(state: AppStore, action: AppActions): AppStore {
	switch (action.type) {
		case SET_GAME_VISIBILITY: {
			if (state.gamesVisibility.get(action.payload.gameId)) {
				const newGamesVisibility = new Map(state.gamesVisibility);
				newGamesVisibility.set(action.payload.gameId, action.payload.gameVisibility);
				return {
					...state,
					gamesVisibility: new Map(newGamesVisibility),
				};
			}
			return state;
		}
		default:
			return state;
	}
}

