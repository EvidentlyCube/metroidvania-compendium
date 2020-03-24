import * as React from 'react';
import { BreadcrumbActions, GameVisibilityActions, DataLoadActions, AppActions, AppStore } from '../storage/common';
import { connect } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';
import { ConfigView } from '../views/ConfigView';
import { Game } from '../storage/models/Game';
import { apiRequestGet } from '../storage/utils/apiRequestManager';

interface ConfigRouteProps {
	games: Map<number, Game>;
	dispatch: Dispatch<AnyAction>;
}

export class ConfigRoute extends React.Component<ConfigRouteProps> {
	public componentDidMount() {
		this.props.dispatch(BreadcrumbActions.setBreadcrumb('Config'));

		// if (this.props.games.size === 0) {
		fetchGamesData(this.props.dispatch);
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
async function fetchGamesData(dispatch: Dispatch<AppActions>) {
	const gamesData: Array<Game> = await apiRequestGet('/games', {});
	if (gamesData !== null) {
		dispatch(DataLoadActions.setGames(gamesData));
		dispatch(GameVisibilityActions.setEveryGameVisibility(true));
	}
}
export default connect(mapStateToProps)(ConfigRoute);
