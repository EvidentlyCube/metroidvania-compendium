import * as React from 'react';
import { BreadcrumbActions } from '../storage/common';
import { connect } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';
import { AbilitiesView } from '../views/AbilitiesView';

interface HomeRouteProps {
	dispatch: Dispatch<AnyAction>;
}

export class HomeRoute extends React.Component<HomeRouteProps> {
	public componentDidMount() {
		this.props.dispatch(BreadcrumbActions.setBreadcrumb('Abilities'));
	}
	public render() {
		return <AbilitiesView />;
	}
}
const mapStateToProps = (): Partial<HomeRouteProps> => {
	return {};
};

export default connect(mapStateToProps)(HomeRoute);
