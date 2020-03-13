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
	gameSeries: Map<number, GameSeries>;
	images: Map<number, File>;
	gamesVisibility: Map<number, boolean>;
}

const GamesList: React.FC<GamesListProps> = (props: GamesListProps) => {
	const { games, gamesVisibility } = props;
	const filteredGames = games.filter((game: Game) => game.title.startsWith(props.filterString));
	return (
		<>
			{filteredGames.map(game => {
				if (gamesVisibility.get(game.id) ?? true) {
					let imgUrl = '';
					let gameSeries = '';
					if (props.images.get(game.id)) {
						imgUrl = props.images.get(game.id)!.fileUrl;
					}
					if (props.gameSeries.get(game.id)) {
						gameSeries = props.gameSeries.get(game.id)!.name;
					}
					return <GameListRow key={game.id} img={imgUrl} name={game.title} series={gameSeries} />;
				}
			})}
		</>
	);
};

const mapStateToProps = (state: AppStore, ownProps: GamesFilterProps): GamesListProps => {
	return {
		games: Array.from(state.games.values()),
		gameSeries: state.gameSeries,
		images: state.images,
		gamesVisibility: state.gamesVisibility,
		filterString: ownProps.filterString,
	};
};

export default connect(mapStateToProps)(GamesList);
