import * as React from 'react';
import { BreadcrumbActions, GameVisibilityActions, AppStore } from '../storage/common';
import { connect } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';
import { ConfigView } from '../views/ConfigView';
import { Game } from '../storage/models/Game';

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
	}
	public render() {
		return <ConfigView changeGamesVisibility={this.changeGamesVisibilityCallback} />;
	}
}
const mapStateToProps = (state: AppStore): Partial<ConfigRouteProps> => {
	return { games: state.games };
};

export default connect(mapStateToProps)(ConfigRoute);
