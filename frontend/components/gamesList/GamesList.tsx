import * as React from 'react';
import { connect } from 'react-redux';
import { AppStore } from '../../storage/common';
import { Game } from '../../storage/models/Game';
import { GameListRow } from './GameListRow';
import { GameSeries } from '../../storage/models/GameSeries';
import { Image, DefaultImage } from '../../storage/models/Image';
interface GamesOwnProps {
	games: Array<Game>;
	gameSeries: Map<number, GameSeries>;
	images: Map<number, Image>;
}
interface GamesListProps extends GamesOwnProps {
	gamesVisibility: Map<number, boolean>;
}

const GamesList: React.FC<GamesListProps> = (props: GamesListProps) => {
	const { games, gamesVisibility } = props;
	return (
		<>
			{games.map(game => {
				if (gamesVisibility.get(game.id) ?? true) {
					const gameSeriesName = props.gameSeries.get(game.seriesId)!.name;
					const imgUrl = props.images.get(game.imageId ?? -1)?.fileUrl ?? DefaultImage.fileUrl;
					return <GameListRow key={game.id} id={game.id} img={imgUrl} name={game.title} series={gameSeriesName} />;
				}
			})}
		</>
	);
};

const mapStateToProps = (state: AppStore, ownProps: GamesOwnProps): GamesListProps => {
	return {
		games: ownProps.games,
		gameSeries: ownProps.gameSeries,
		images: ownProps.images,
		gamesVisibility: state.gamesVisibility,
	};
};

export default connect(mapStateToProps)(GamesList);
