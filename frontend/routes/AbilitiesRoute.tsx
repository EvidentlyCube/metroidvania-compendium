import * as React from 'react';
import { BreadcrumbActions } from '../storage/common';
import { connect } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';
import { AbilitiesView } from '../views/AbilitiesView';

interface AbilitiesRouteProps {
	dispatch: Dispatch<AnyAction>;
}

export class AbilitiesRoute extends React.Component<AbilitiesRouteProps> {
	public componentDidMount() {
		this.props.dispatch(BreadcrumbActions.setBreadcrumb('Abilities'));
	}
	public render() {
		return <AbilitiesView />;
	}
}
const mapStateToProps = (): Partial<AbilitiesRouteProps> => {
	return {};
};

export default connect(mapStateToProps)(AbilitiesRoute);
