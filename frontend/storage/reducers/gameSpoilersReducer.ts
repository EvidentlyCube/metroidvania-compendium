// eslint-disable-next-line no-unused-vars
import {AppStore, SET_GAME_SPOILERS, AppActions} from '../common';
// eslint-disable-next-line no-unused-vars
import { GameSpoilers, GameSpoilersMutator } from '../models/GameSpoilers';

export function gameSpoilersReducer(state: AppStore, action: AppActions): AppStore {
	switch (action.type) {
		case SET_GAME_SPOILERS: {
			return mutateGameSpoilers(state, GameSpoilersMutator.changeShowSpoilers(
				state.gameSpoilers.get(action.payload.gameId),
				action.payload.showSpoilers,
			));
		}
		default:
			return state;
	}
}
function mutateGameSpoilers(state: AppStore, gameSpoilers: GameSpoilers | undefined): AppStore {
	if (!gameSpoilers) {
		return state;
	}
	return {
		...state,
		gameSpoilers: state.gameSpoilers.set(gameSpoilers.gameId, gameSpoilers),
	};
}
