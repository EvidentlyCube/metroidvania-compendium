import * as React from 'react';
import { GamesCheck } from '../Components/Games';
import { MainHeader } from '../Components/Header';

class Game {
	public name: string;

	constructor(name: string) {
		this.name = name;
	}
}
// Creation of mock data, to simulate a list
let mockData: Game[] = [];
for (let i = 0; i < 11; i++) {
	let newGame: Game = new Game('Super Metroid');
	mockData.push(newGame);
}

const gameList = function(gameData: Game[]): JSX.Element[] {
	let result = [];
	for (let game of gameData) {
		result.push(<>
			<GamesCheck game={game.name}/>
		</>);
	}
	return result;
};

export class Config extends React.Component {
	public render(): React.ReactNode  {
		return (
			<>
				<MainHeader pageName="Config"/>
				<header>
					<h1>Configuration</h1>
					<h2>Customize your experience</h2>
				</header>
				<div className="container">
					<h2>Visible games</h2>
					<article>
						<p>There are a lot of spoilers in here for games you may not have played.
                            Please select the games which youd like to see.</p>
					</article>
					<form action="#" method="post">
						<button>Select All</button>
						<button>Unselect All</button>
						<div>
							<input type="text" name="game" placeholder="Find a game"/>
						</div>
						{gameList(mockData)}
					</form>
				</div>
			</>
		);
	}
}

