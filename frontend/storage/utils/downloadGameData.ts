import { AnyAction, Dispatch } from 'redux';
import { SERVER_ADRESS, DataLoadActions, BreadcrumbActions } from '../common';
import axios, { AxiosResponse } from 'axios';
import { GameSeries } from '../models/GameSeries';
import { Game } from '../models/Game';
import { Image } from '../models/Image';
import { GameEnvironment } from '../models/GameEnvironment';
import { Environment } from '../models/Environment';

export async function requestGameData(id: number, dispatch: Dispatch<AnyAction>, changeGameExistsState: (doesGameExistsInDb: boolean) => void) {
	const gameResponse = await axios.get(SERVER_ADRESS + '/games/' + id).catch(function(error) {
		changeGameExistsState(false);
		console.log(error);
		return;
	});
	if (gameResponse && gameResponse.data.data) {
		const game: Game = gameResponse.data.data;
		const requestArray = [axios.get(SERVER_ADRESS + '/game-series/' + game.seriesId), axios.get(SERVER_ADRESS + '/game-environments?gameId=' + game.id)];
		const gameDetailsResponses = await axios.all(requestArray).catch(function(error) {
			changeGameExistsState(false);
			console.log(error);
			return;
		});
		if (gameDetailsResponses) {
			const series: GameSeries = gameDetailsResponses[0].data.data;
			const gameEnvironments: Array<GameEnvironment> = gameDetailsResponses[1].data.data;
			let image: Image | null = null;
			if (gameDetailsResponses[2]) {
				image = gameDetailsResponses[2].data.data;
			}
			const environemntRequests: Promise<AxiosResponse<any>>[] = [];
			const environments: Array<Environment> = new Array();
			for (const gameEnvironment of gameEnvironments) {
				environemntRequests.push(axios.get(SERVER_ADRESS + '/environments/' + gameEnvironment.environmentId));
			}
			const environmentResponses = await axios.all(environemntRequests).catch(function(error) {
				changeGameExistsState(false);
				console.log(error);
				return;
			});
			if (environmentResponses) {
				for (const response of environmentResponses) {
					environments.push(response.data.data);
				}
				dispatch(DataLoadActions.setGameData(game, series, image!, gameEnvironments, environments));
				dispatch(BreadcrumbActions.setBreadcrumb(game.title));
				changeGameExistsState(true);
			}
		}
	} else {
		changeGameExistsState(false);
	}
}
