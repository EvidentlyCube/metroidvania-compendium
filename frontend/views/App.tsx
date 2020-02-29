import * as React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';

import { Footer } from '../components/Footer';
import {Home} from './Home';
import {Config} from './Config';
import {Header} from '../components/Header';

export class App extends React.Component {
	public render()  {
		return (
			<>
				<Router>
					<Header/>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/games"/>
						<Route path="/abilities"/>
						<Route path="/config" component={Config}/>
					</Switch>
				</Router>

				{/* <Hello compiler="TypeScript" framework="React" /> */}
				<hr></hr>
				<Footer/>
			</>
		);
	}
}
