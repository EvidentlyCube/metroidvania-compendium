import * as React from 'react';
import {
	Link,
} from 'react-router-dom';

export class Home extends React.Component {
	public render(): React.ReactNode  {
		return (
			<>
				<h1>Metroidvania Compendium</h1>
				<div className="container">
					<article>
						<p>A comprehensive compendium of abilities in Metroidvania games. Perfect research material for your own game.
                    	Excellent if you want to learn more about the genre you love.
                    	Invaluable source of inspiration for any kind of game.</p>
						<h2>Beware spoilers!</h2>
						<p><Link to="/config">Configure your experience</Link> to avoid them.</p>
					</article>

				</div>
			</>
		);
	}
}
