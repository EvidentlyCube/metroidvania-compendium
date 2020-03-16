import * as React from 'react';
import { BreadcrumbActions } from '../storage/common';
import { connect } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';
import { HomeView } from '../views/HomeView';

interface HomeRouteProps {
	dispatch: Dispatch<AnyAction>;
}

export class HomeRoute extends React.Component<HomeRouteProps> {
	public componentDidMount() {
		this.props.dispatch(BreadcrumbActions.setBreadcrumb('Home'));
	}
	public render() {
		return <HomeView />;
	}
}
const mapStateToProps = (): Partial<HomeRouteProps> => {
	return {};
};

export default connect(mapStateToProps)(HomeRoute);
