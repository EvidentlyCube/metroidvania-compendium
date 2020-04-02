import * as React from 'react';
import { Game } from '../../storage/models/Game';
import { FetchGame } from '../../storage/utils/fetchGameData';
import GamesVisibilityList from './GamesVisibilityList';

interface SmartGamesListState {
	isDataAvailable: boolean;
	games: Array<Game> | null;
}

interface SmartGamesListProps {
	filterString: string;
}

export class SmartGamesVisibilityList extends React.Component<SmartGamesListProps, SmartGamesListState> {
	constructor(props: SmartGamesListProps) {
		super(props);
		this.state = {
			isDataAvailable: false,
			games: null,
		};
	}
	public async componentDidMount() {
		try {
			const games = await FetchGame.lookupGames();
			this.setState({
				games,
				isDataAvailable: true,
			});
		} catch (error) {
			console.log(error);
			this.setState({ isDataAvailable: false });
		}
	}
	public render() {
		if (this.state.isDataAvailable) {
			const filteredGames = this.state.games!.filter((game: Game) => game.title.startsWith(this.props.filterString));
			return <GamesVisibilityList games={filteredGames} />;
		} else {
			return <></>;
		}
	}
}
