import { Game } from './models/Game';
import { GameSeries } from './models/GameSeries';
import { Image } from './models/Image';
import { Environment } from './models/Environment';
import { GameEnvironment } from './models/GameEnvironment';
import { AbilityExample } from './models/AbilityExample';
import { Ability } from './models/Ability';
import { AbilityGroup } from './models/AbilityGroup';
import { AbilityCategory } from './models/AbilityCategory';
import { AbilityVariant } from './models/AbilityVariant';
export const SET_BREADCRUMB = 'SET_BREADCRUMB';
export const SET_GAME_VISIBILITY = 'SET_GAME_VISIBILITY';
export const SET_EVERY_GAME_VISIBILITY = 'SET_EVERY_GAME_VISIBILITY';
export const SET_GAMES = 'SET_GAMES';
export const SET_GAME_DATA = 'SET_GAME_DATA';

export interface AppStore {
	headerBreadcrumb: string;
	gamesVisibility: Map<number, boolean>;
	games: Map<number, Game>;
	gameSeries: Map<number, GameSeries>;
	images: Map<number, Image>;
	environments: Map<number, Environment>;
	gameEnvironments: GameEnvironment[];
	abilityExamples: AbilityExample[];
	abilityVariants: AbilityVariant[];
	abilities: Map<number, Ability>;
	abilityGroups: Map<number, AbilityGroup>;
	abilityCategories: Map<number, AbilityCategory>;
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
export interface SetEveryGameVisibilityAction {
	type: typeof SET_EVERY_GAME_VISIBILITY;
	gamesVisibility: boolean;
}
export interface SetGamesAction {
	type: typeof SET_GAMES;
	games: Game[];
}
export interface SetGameDataAction {
	type: typeof SET_GAME_DATA;
	game: Game;
	gameSeries: GameSeries;
	image: Image;
	gameEnvironments: GameEnvironment[];
	environments: Environment[];
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
	setEveryGameVisibility: function(gamesVisibility: boolean): SetEveryGameVisibilityAction {
		return {
			type: SET_EVERY_GAME_VISIBILITY,
			gamesVisibility: gamesVisibility,
		};
	},
};
export const DataLoadActions = {
	setGames: function(games: Game[]): SetGamesAction {
		return {
			type: SET_GAMES,
			games,
		};
	},
	setGameData: function(
		game: Game,
		gameSeries: GameSeries,
		image: Image,
		gameEnvironments: GameEnvironment[],
		environments: Environment[]
	): SetGameDataAction {
		return {
			type: SET_GAME_DATA,
			game,
			gameSeries,
			gameEnvironments,
			image,
			environments,
		};
	},
};
export type AppActions = SetBreadcrumbAction | SetGameVisibilityAction | SetEveryGameVisibilityAction | SetGamesAction | SetGameDataAction;
