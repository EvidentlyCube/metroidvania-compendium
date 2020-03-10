import * as React from 'react';
// eslint-disable-next-line no-unused-vars
import {Store} from 'redux';
// eslint-disable-next-line no-unused-vars
import { AppStore, AppActions, BreadcrumbActions} from '../storage/common';
import GamesVisibilityList from '../components/GamesVisibilityList';

interface ConfigViewProps{
	store: Store<AppStore, AppActions>;
}

export class ConfigView extends React.Component<ConfigViewProps> {
	public componentDidMount() {
		this.props.store.dispatch(BreadcrumbActions.setBreadcrumb('Config'));
	}

	public render(): React.ReactNode  {
		return (
			<>
				<header>
					<h1>Configuration</h1>
					<h2>Customize your experience</h2>
				</header>
				<div className="container">
					<h2>Visible games</h2>
					<article>
						<p>There are a lot of spoilers in here for games you may not have played.
                            Please select the games which youd like to see.</p>
					</article>
					<form action="#" method="post">
						<button>Select All</button>
						<button>Unselect All</button>
						<div>
							<input type="text" name="game" placeholder="Find a game"/>
						</div>
						<GamesVisibilityList/>
					</form>
				</div>
			</>
		);
	}
}

