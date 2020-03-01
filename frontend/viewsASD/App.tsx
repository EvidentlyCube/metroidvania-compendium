import * as React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import { Store } from 'redux';

import { Footer } from '../componentsASD/Footer';
import {Home} from './Home';
import {Config} from './Config';
import Header from '../componentsASD/Header';
// eslint-disable-next-line no-unused-vars
import { Breadcrumb, SetBreadcrumbAction, BreadcrumbActions } from '../storage/common';

interface appProps{
	store: Store<Breadcrumb, SetBreadcrumbAction>;
}

export class App extends React.Component<appProps> {
	constructor(props: appProps) {
		super(props);
		this.props.store.dispatch(BreadcrumbActions.setBreadcrumb({pageName: 'Home'}));
	}

	public render()  {
		return (
			<>
				<Provider store={this.props.store}>
					<Router>
						<Header/>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/games"/>
							<Route path="/abilities"/>
							<Route path="/config" component={Config}/>
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
