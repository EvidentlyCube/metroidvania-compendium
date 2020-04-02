import * as React from 'react';
import { FetchHelperFunctions } from '../../storage/utils/fetchHelperFunctions';
import { Game } from '../../storage/models/Game';
import { GameSeries } from '../../storage/models/GameSeries';
import { Image } from '../../storage/models/Image';
import { FetchGame } from '../../storage/utils/fetchGameData';
import GamesList from './GamesList';

interface SmartGamesListState {
	isDataAvailable: boolean;
	games: Array<Game> | null;
	gameSeries: Map<number, GameSeries> | null;
	images: Map<number, Image> | null;
}

interface SmartGamesListProps {
	filterString: string;
}

export class SmartGamesList extends React.Component<SmartGamesListProps, SmartGamesListState> {
	constructor(props: SmartGamesListProps) {
		super(props);
		this.state = {
			isDataAvailable: false,
			games: null,
			gameSeries: null,
			images: null,
		};
	}
	public async componentDidMount() {
		try {
			const games = await FetchGame.lookupGames();
			const filteredGames = games.filter((game: Game) => game.title.startsWith(this.props.filterString));
			const gameSeries = await FetchGame.lookupSeriesByIds(FetchHelperFunctions.getUniqueValues(filteredGames, 'seriesId'));
			const imageIds = FetchHelperFunctions.getUniqueValues(filteredGames, 'imageId');
			let images = null;
			console.log(imageIds);
			if (imageIds.length > 0) {
				images = await FetchGame.lookupImagesByIds(imageIds);
			}
			this.setState({
				games,
				gameSeries: FetchHelperFunctions.mapValues(gameSeries, 'id'),
				images: images ? FetchHelperFunctions.mapValues(images, 'id') : new Map(),
				isDataAvailable: true,
			});
		} catch (error) {
			console.log(error);
			this.setState({ isDataAvailable: false });
		}
	}
	public render() {
		if (this.state.isDataAvailable) {
			return <GamesList games={this.state.games!} images={this.state.images!} gameSeries={this.state.gameSeries!} />;
		} else {
			return <></>;
		}
	}
}
