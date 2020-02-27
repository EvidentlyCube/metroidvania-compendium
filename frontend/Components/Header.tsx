import * as React from 'react';
import {
	Link,
} from 'react-router-dom';
export interface HeaderParams{
	pageName: string;
}
export class MainHeader extends React.Component<HeaderParams> {
	private readonly pageName: string;

	constructor(params: HeaderParams) {
		super(params);
		this.pageName = params.pageName;
	}

	public render(): JSX.Element {
		return (
			<>
				<nav>
					<div><strong>Metroidvania Compendium</strong>
						<span> » {this.pageName}</span>
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
