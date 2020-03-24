import * as React from 'react';
import axios from 'axios';
import { BreadcrumbActions, GameVisibilityActions, SERVER_ADRESS, DataLoadActions, AppActions, AppStore } from '../storage/common';
import { connect } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';
import { ConfigView } from '../views/ConfigView';
import { Game } from '../storage/models/Game';

interface ConfigRouteProps {
	games: Map<number, Game>;
	dispatch: Dispatch<AnyAction>;
}

export class ConfigRoute extends React.Component<ConfigRouteProps> {
	public componentDidMount() {
		this.props.dispatch(BreadcrumbActions.setBreadcrumb('Config'));

		// if (this.props.games.size === 0) {
		fetchGamesData()(this.props.dispatch);
		// }
	}
	public render() {
		const changeGamesVisibilityCallback = (allVisible: boolean) => {
			this.props.dispatch(GameVisibilityActions.setEveryGameVisibility(allVisible));
		};
		return <ConfigView changeGamesVisibility={changeGamesVisibilityCallback} />;
	}
}
const mapStateToProps = (state: AppStore): Partial<ConfigRouteProps> => {
	return { games: state.games };
};
function fetchGamesData() {
	return (dispatch: Dispatch<AppActions>) => {
		return axios
			.get(SERVER_ADRESS + '/games')
			.then((response: any) => {
				dispatch(DataLoadActions.setGames(response.data.data));
				dispatch(GameVisibilityActions.setEveryGameVisibility(true));
			})
			.catch(function(error) {
				console.log(error);
			});
	};
}
export default connect(mapStateToProps)(ConfigRoute);
