export const SET_BREADCRUMB = 'SET_BREADCRUMB';
export const SET_GAME_VISIBILITY = 'SET_GAME_VISIBILITY';

export interface AppStore {
	headerBreadcrumb: string;
	gamesVisibility: Map<number, boolean>;
}
export interface SetBreadcrumbAction{
	type: typeof SET_BREADCRUMB;
	headerBreadcrumb: string;
}
export interface setGameSpoilersAction{
	type: typeof SET_GAME_VISIBILITY;
	payload: {
		gameId: number;
		gameVisibility: boolean;
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
	setGameSpoilers: function(gameId: number, gameVisibility: boolean) {
		return {
			type: SET_GAME_VISIBILITY,
			payload: {gameId, showSpoilers: gameVisibility},
		};
	},
};

export type AppActions = SetBreadcrumbAction | setGameSpoilersAction;
