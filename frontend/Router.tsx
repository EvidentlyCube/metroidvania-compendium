import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
} from 'react-router-dom';
export const MainRouter = (): JSX.Element => {
	return (
		<Router>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/games">Game List</Link>
					</li>
					<li>
						<Link to="/abilities">Abilities</Link>
					</li>
					<li>
						<Link to="/config">Config</Link>
					</li>
				</ul>
			</nav>

			<hr />
			<Switch>
				<Route exact path="/">
					{/* <Home /> */}
				</Route>
				<Route path="/games">
					{/* <Games /> */}
				</Route>
				<Route path="/abilities">
					{/* <Abilities /> */}
				</Route>
				<Route path="/config">
					{/* <Config /> */}
				</Route>
			</Switch>
		</Router>
	);
};
