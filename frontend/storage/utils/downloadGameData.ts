import { AnyAction, Dispatch } from 'redux';
import { DataLoadActions, BreadcrumbActions } from '../common';
import { GameSeries } from '../models/GameSeries';
import { Game } from '../models/Game';
import { Image } from '../models/Image';
import { GameEnvironment } from '../models/GameEnvironment';
import { Environment } from '../models/Environment';
import { ApiRequests } from './apiRequestManager';

export async function requestGameData(id: number, dispatch: Dispatch<AnyAction>, changeGameExistsState: (doesGameExistsInDb: boolean) => void) {
	const game: Game = await ApiRequests.apiRequestGet(`games/${id}`, {});
	if (game) {
		const series: GameSeries = await ApiRequests.apiRequestGet(`game-series/${game.seriesId}`, {});
		const gameEnvironments: Array<GameEnvironment> = await ApiRequests.apiRequestGet(`game-environments`, { gameId: game.id });
		let image: Image | null = null;
		if (game.imageId) {
			image = await ApiRequests.apiRequestGet(`images/${game.imageId}`, {});
		}
		const environments: Array<Environment> = new Array();
		for (const gameEnvironment of gameEnvironments) {
			environments.push(await ApiRequests.apiRequestGet('environments/' + gameEnvironment.environmentId, {}));
		}
		dispatch(DataLoadActions.setGameData(game, series, image!, gameEnvironments, environments));
		dispatch(BreadcrumbActions.setBreadcrumb(game.title));
		changeGameExistsState(true);
	} else {
		changeGameExistsState(false);
	}
}
