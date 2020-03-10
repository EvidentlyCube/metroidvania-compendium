import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import { Store } from 'redux';
import { Footer } from '../components/Footer';
import { HomeView } from './HomeView';
import { ConfigView } from './ConfigView';
import Header from '../components/Header';
// eslint-disable-next-line no-unused-vars
import { AppStore, AppActions } from '../storage/common';

interface AppProps {
	store: Store<AppStore, AppActions>;
}

export class App extends React.Component<AppProps> {
	public render() {
		return (
			<>
				<Provider store={this.props.store}>
					<Router>
						<Header />
						<Switch>
							<Route exact path="/" render={() => <HomeView store={this.props.store} />} />
							<Route path="/games" />
							<Route path="/abilities" />
							<Route path="/config" render={() => <ConfigView store={this.props.store} />} />
						</Switch>
					</Router>
				</Provider>
				<hr></hr>
				<Footer />
			</>
		);
	}
}
