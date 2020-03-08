import * as React from 'react';
// eslint-disable-next-line no-unused-vars
import {Store} from 'redux';
// eslint-disable-next-line no-unused-vars
import { AppStore, AppActions, BreadcrumbActions} from '../storage/common';
import { GamesCheck } from '../components/Games';

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
interface GameListProps{
	games: Game[];
}
const GameList: React.FC<GameListProps> = (props: GameListProps) => <React.Fragment>
	{props.games.map(game=> <GamesCheck key={game.name} game={game.name}/>)};
</React.Fragment>;

interface ConfigViewProps{
	store: Store<AppStore, AppActions>;
}

export class ConfigView extends React.Component<ConfigViewProps> {
	public componentDidMount() {
		this.props.store.dispatch(BreadcrumbActions.setBreadcrumb('Config'));
	}

	public render(): React.ReactNode  {
		return (
			<>
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
						<GameList games={mockData}/>
					</form>
				</div>
			</>
		);
	}
}

