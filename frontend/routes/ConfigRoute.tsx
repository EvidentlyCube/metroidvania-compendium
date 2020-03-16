import * as React from 'react';
import { BreadcrumbActions, GameVisibilityActions } from '../storage/common';
import { connect } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';
import { ConfigView } from '../views/ConfigView';

interface ConfigRouteProps {
	dispatch: Dispatch<AnyAction>;
}

export class ConfigRoute extends React.Component<ConfigRouteProps> {
	public componentDidMount() {
		this.props.dispatch(BreadcrumbActions.setBreadcrumb('Config'));
	}
	public render() {
		const buttonCallback = (allVisible: boolean) => {
			this.props.dispatch(GameVisibilityActions.setEveryGameVisibility(allVisible));
		};
		return <ConfigView buttonAction={buttonCallback} />;
	}
}
const mapStateToProps = (): Partial<ConfigRouteProps> => {
	return {};
};

export default connect(mapStateToProps)(ConfigRoute);
