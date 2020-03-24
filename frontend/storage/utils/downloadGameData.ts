import { AnyAction, Dispatch } from 'redux';
import { AppActions, SERVER_ADRESS, DataLoadActions, BreadcrumbActions } from '../common';
import axios, { AxiosResponse } from 'axios';
import { GameSeries } from '../models/GameSeries';
import { Game } from '../models/Game';
import { Image } from '../models/Image';
import { GameEnvironment } from '../models/GameEnvironment';
import { Environment } from '../models/Environment';

export function requestGameData(id: number, dispatch: Dispatch<AnyAction>, changeGameExistsState: (gameFound: boolean) => void) {
	fetchGameData(id)(dispatch, changeGameExistsState);
}
function fetchGameData(id: number) {
	return (dispatch: Dispatch<AppActions>, changeGameExistsState: (gameFound: boolean) => void) => {
		return axios
			.get(SERVER_ADRESS + 'games/' + id)
			.then((response: any) => {
				if (response.data.data) {
					const game: Game = response.data.data;
					const requestArray = [
						axios.get(SERVER_ADRESS + 'game-series/' + game.seriesId),
						axios.get(SERVER_ADRESS + 'game-environments?gameId=' + game.id),
					];
					if (game.imageId) {
						requestArray.push(axios.get(SERVER_ADRESS + 'images/' + game.imageId));
					}
					axios.all(requestArray).then(responseArray => {
						const series: GameSeries = responseArray[0].data.data;
						const gameEnvironments: Array<GameEnvironment> = responseArray[1].data.data;
						let image: Image | null = null;
						if (responseArray[2]) {
							image = responseArray[2].data.data;
						}
						const environemntRequests: Promise<AxiosResponse<any>>[] = [];
						const environments: Array<Environment> = new Array();
						for (const gameEnvironment of gameEnvironments) {
							environemntRequests.push(axios.get(SERVER_ADRESS + 'environments/' + gameEnvironment.environmentId));
						}
						axios.all(environemntRequests).then(environmentResponseArray => {
							for (const response of environmentResponseArray) {
								environments.push(response.data.data);
							}
							dispatch(DataLoadActions.setGameData(game, series, image!, gameEnvironments, environments));
							dispatch(BreadcrumbActions.setBreadcrumb(game.title));
							changeGameExistsState(true);
						});
					});
				} else {
					changeGameExistsState(false);
				}
			})
			.catch(function(error) {
				changeGameExistsState(false);
				console.log(error);
			});
	};
}
