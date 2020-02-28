import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';
// import { Hello } from './Hello';

import { Footer } from './Components/Footer';
import {Home} from './Views/Home';
import {Config} from './Views/Config';
import { Header } from './Components/Header';

ReactDOM.render(
	<>
		<Router>
			<Header />
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
	</>,
	document.getElementById('app'),
);
