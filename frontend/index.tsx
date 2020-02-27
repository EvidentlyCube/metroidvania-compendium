import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';
// import { Hello } from './Hello';

import { Footer } from './Components/Footer';
import {Home} from './Content/Home';
import {Config} from './Content/Config';

ReactDOM.render(
	<>
		<Router>
			<Switch>
				<Route path="/" >
					<Route exact path="/" component={Home}>
						{/* <Home /> */}
					</Route>
					<Route path="/games">
						{/* <Games /> */}
					</Route>
					<Route path="/abilities">
						{/* <Abilities /> */}
					</Route>
					<Route path="/config" component={Config}>
						{/* <Config /> */}
					</Route>
				</Route>
			</Switch>
		</Router>
		{/* <Hello compiler="TypeScript" framework="React" /> */}
		<hr></hr>
		<Footer/>
	</>,
	document.getElementById('app'),
);

