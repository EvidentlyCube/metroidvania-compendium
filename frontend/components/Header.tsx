import * as React from 'react';
import {
	Link,
} from 'react-router-dom';

export class Header extends React.Component {
	public render(): JSX.Element {
		return (
			<>
				<nav>
					<div><strong>Metroidvania Compendium</strong>
						<span> » Home</span>
					</div>
					<div>
						{/* Spans are placeholder before styling, to have a space between links */}
						<Link to="/">Home</Link><span>  </span>
						<Link to="/games">Game List</Link><span>  </span>
						<Link to="/abilities">Abilities</Link><span>  </span>
						<Link to="/config">Config</Link><span>  </span>
					</div>
				</nav>
				<hr></hr>
			</>

		);
	}
}
