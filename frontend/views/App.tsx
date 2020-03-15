import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { Footer } from '../components/Footer';
import { HomeView } from './HomeView';
import { ConfigView } from './ConfigView';
import Header from '../components/Header';
import { AppStore, AppActions } from '../storage/common';
import { PageLayout } from '../components/styles/PageLayout';
import { Content } from '../components/styles/Content';
import { GamesView } from './GamesView';
import GameDetailedView from './GameDetailedView';

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
								<Route exact path="/" render={() => <HomeView store={this.props.store} />} />
								<Route path="/games" render={() => <GamesView store={this.props.store} />} />
								<Route path="/abilities" />
								<Route path="/config" render={() => <ConfigView store={this.props.store} />} />
								<Route path="/game/:gameId" component={GameDetailedView} />
							</Switch>
						</Content>
					</Router>
				</Provider>
				<Footer />
			</PageLayout>
		);
	}
}
