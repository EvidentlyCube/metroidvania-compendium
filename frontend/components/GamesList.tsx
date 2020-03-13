import * as React from 'react';
import { connect } from 'react-redux';
import { AppStore } from '../storage/common';
import { Game } from '../storage/models/Game';
import { GameListRow } from './listings/GameListRow';
import { GameSeries } from '../storage/models/GameSeries';
import { File } from '../storage/models/File';
interface GamesFilterProps {
	filterString: string;
}
interface GamesListProps extends GamesFilterProps {
	games: Array<Game>;
	gameSeries: Array<GameSeries>;
	images: Array<File>;
	gamesVisibility: Map<number, boolean>;
}

const GamesList: React.FC<GamesListProps> = (props: GamesListProps) => {
	const { games, gamesVisibility } = props;
	const filteredGames = games.filter((game: Game) => game.title.startsWith(props.filterString));
	return (
		<>
			{filteredGames.map(game => {
				if (gamesVisibility.get(game.id) ?? true) {
					return <GameListRow key={game.id} img={props.images[game.id].fileUrl} name={game.title} series={props.gameSeries[game.id].name} />;
				}
			})}
		</>
	);
};

const mapStateToProps = (state: AppStore, ownProps: GamesFilterProps): Partial<GamesListProps> => {
	return {
		games: Array.from(state.games.values()),
		gameSeries: Array.from(state.gameSeries.values()),
		images: Array.from(state.images.values()),
		gamesVisibility: state.gamesVisibility,
		filterString: ownProps.filterString,
	};
};

export default connect(mapStateToProps)(GamesList);
