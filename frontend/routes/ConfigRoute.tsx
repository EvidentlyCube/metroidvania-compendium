import * as React from 'react';
import { BreadcrumbActions, GameVisibilityActions, DataLoadActions, AppStore } from '../storage/common';
import { connect } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';
import { ConfigView } from '../views/ConfigView';
import { Game } from '../storage/models/Game';
import { FetchGame } from '../storage/utils/fetchGameData';

interface ConfigRouteProps {
	games: Map<number, Game>;
	dispatch: Dispatch<AnyAction>;
}

export class ConfigRoute extends React.Component<ConfigRouteProps> {
	changeGamesVisibilityCallback = (allVisible: boolean) => {
		this.props.dispatch(GameVisibilityActions.setEveryGameVisibility(allVisible));
	};
	public async componentDidMount() {
		this.props.dispatch(BreadcrumbActions.setBreadcrumb('Config'));
		try {
			const gamesData = await FetchGame.lookupGames();
			this.props.dispatch(DataLoadActions.setGames(gamesData));
			this.props.dispatch(GameVisibilityActions.setEveryGameVisibility(true));
		} catch (error) {
			console.log(error);
		}
	}
	public render() {
		return <ConfigView changeGamesVisibility={this.changeGamesVisibilityCallback} />;
	}
}
const mapStateToProps = (state: AppStore): Partial<ConfigRouteProps> => {
	return { games: state.games };
};

export default connect(mapStateToProps)(ConfigRoute);
