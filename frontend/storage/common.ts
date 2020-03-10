import { Game } from './models/Game';
export const SET_BREADCRUMB = 'SET_BREADCRUMB';
export const SET_GAME_VISIBILITY = 'SET_GAME_VISIBILITY';

export interface AppStore {
	headerBreadcrumb: string;
	gamesVisibility: Map<number, boolean>;
	games: Map<number, Game>;
}
export interface SetBreadcrumbAction {
	type: typeof SET_BREADCRUMB;
	headerBreadcrumb: string;
}
export interface SetGameVisibilityAction {
	type: typeof SET_GAME_VISIBILITY;
	gameId: number;
	gamesVisibility: boolean;
}
export const BreadcrumbActions = {
	setBreadcrumb: function(headerBreadcrumb: string): SetBreadcrumbAction {
		return {
			type: SET_BREADCRUMB,
			headerBreadcrumb: headerBreadcrumb,
		};
	},
};
export const GameVisibilityActions = {
	setGameVisibility: function(gameId: number, gameVisibility: boolean): SetGameVisibilityAction {
		return {
			type: SET_GAME_VISIBILITY,
			gameId: gameId,
			gamesVisibility: gameVisibility,
		};
	},
};

export type AppActions = SetBreadcrumbAction | SetGameVisibilityAction;
