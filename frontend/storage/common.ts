// eslint-disable-next-line no-unused-vars
import {GameSpoilers} from './models/GameSpoilers';
export const SET_BREADCRUMB = 'SET_BREADCRUMB';
export const SET_GAME_SPOILERS = 'SET_GAME_SPOILERS';

export interface AppStore {
	headerBreadcrumb: string;
	gameSpoilers: Map<number, GameSpoilers>;
}
export interface SetBreadcrumbAction{
	type: typeof SET_BREADCRUMB;
	headerBreadcrumb: string;
}
export interface setGameSpoilersAction{
	type: typeof SET_GAME_SPOILERS;
	payload: {
		gameId: number;
		showSpoilers: boolean;
	};
}
export const BreadcrumbActions = {
	setBreadcrumb: function(headerBreadcrumb: string): SetBreadcrumbAction {
		return {
			type: SET_BREADCRUMB,
			headerBreadcrumb: headerBreadcrumb,
		};
	},
};
export const GameSpoilersActions = {
	setGameSpoilers: function(gameId: number, showSpoilers: boolean) {
		return {
			type: SET_GAME_SPOILERS,
			payload: {gameId, showSpoilers},
		};
	},
};

export type AppActions = SetBreadcrumbAction | setGameSpoilersAction;
