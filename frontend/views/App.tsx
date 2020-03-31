import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { Footer } from '../components/Footer';
import Header from '../components/Header';
import { AppStore, AppActions } from '../storage/common';
import { PageLayout } from '../components/styles/PageLayout';
import { Content } from '../components/styles/Content';
import { GameRoute } from '../routes/GameRoute';
import ConfigRoute from '../routes/ConfigRoute';
import GamesRoute from '../routes/GamesRoute';
import HomeRoute from '../routes/HomeRoute';
import AbilityRoute from '../routes/AbilityRoute';
import AbilitiesRoute from '../routes/AbilitiesRoute';

interface AppProps {
	store: Store<AppStore, AppActions>;
}

export class App extends React.Component<AppProps> {
	public render() {
		return (
			<PageLayout>
				<Provider store={this.props.store}>
					<Router>
						<Header />
						<Content>
							<Switch>
								<Route exact path="/" component={HomeRoute} />
								<Route path="/games" component={GamesRoute} />
								<Route path="/abilities" component={AbilitiesRoute} />
								<Route path="/config" component={ConfigRoute} />
								<Route path="/game/:gameId" component={GameRoute} />
								<Route path="/ability/:abilityId" component={AbilityRoute} />
							</Switch>
						</Content>
					</Router>
				</Provider>
				<Footer />
			</PageLayout>
		);
	}
}
