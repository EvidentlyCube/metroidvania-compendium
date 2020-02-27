import * as React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
} from 'react-router-dom';
import {Home} from '../Content/Home';
import {Config} from '../Content/Config';

export class MainRouter extends React.Component {
	public render(): JSX.Element {
		return (
			<Router>
				<nav>
					<div><strong>Metroidvania Compendium</strong>
						<span> » PageName</span>
					</div>
					<div>
						{/* Spans are placeholder before styling, to have a space between links */}
						<Link to="/">Home</Link><span>  </span>
						<Link to="/games">Game List</Link><span>  </span>
						<Link to="/abilities">Abilities</Link><span>  </span>
						<Link to="/config">Config</Link><span>  </span>
					</div>
				</nav>

				<hr />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/games">
						{/* <Games /> */}
					</Route>
					<Route path="/abilities">
						{/* <Abilities /> */}
					</Route>
					<Route path="/config">
						<Config />
					</Route>
				</Switch>
			</Router>
		);
	}
}

