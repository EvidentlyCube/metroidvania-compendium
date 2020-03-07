import * as React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';

import { Provider } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import { Store } from 'redux';
import { Footer } from '../components/Footer';
import {Home} from './Home';
import {Config} from './Config';
import Header from '../components/Header';
// eslint-disable-next-line no-unused-vars
import { AppStore, AppActions} from '../storage/common';

interface AppProps{
	store: Store<AppStore, AppActions>;
}

export class App extends React.Component<AppProps> {
	public render()  {
		return (
			<>
				<Provider store={this.props.store}>
					<Router>
						<Header/>
						<Switch>
							<Route exact path="/" render={() => <Home store={this.props.store}/>}/>
							<Route path="/games"/>
							<Route path="/abilities"/>
							<Route path="/config" render={() => <Config store={this.props.store}/>}/>
						</Switch>
					</Router>
				</Provider>
				{/* <Hello compiler="TypeScript" framework="React" /> */}
				<hr></hr>
				<Footer/>
			</>
		);
	}
}
