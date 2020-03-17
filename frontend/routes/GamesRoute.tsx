import * as React from 'react';
import { BreadcrumbActions } from '../storage/common';
import { connect } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';
import { GamesView } from '../views/GamesView';

interface GamesRouteProps {
	dispatch: Dispatch<AnyAction>;
}

export class GamesRoute extends React.Component<GamesRouteProps> {
	public componentDidMount() {
		this.props.dispatch(BreadcrumbActions.setBreadcrumb('Game List'));
	}
	public render() {
		return <GamesView />;
	}
}
const mapStateToProps = (): Partial<GamesRouteProps> => {
	return {};
};

export default connect(mapStateToProps)(GamesRoute);
