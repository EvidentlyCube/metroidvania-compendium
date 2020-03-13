import * as React from 'react';
import { connect } from 'react-redux';
import { AppStore } from '../storage/common';
import { Game } from '../storage/models/Game';
import { GameListRow } from './listings/GameListRow';
interface GamesFilterProps {
	filterString: string;
}
interface GamesListProps extends GamesFilterProps {
	games: Array<Game>;
	gamesVisibility: Map<number, boolean>;
}

const GamesList: React.FC<GamesListProps> = (props: GamesListProps) => {
	const { games, gamesVisibility } = props;
	const filteredGames = games.filter((game: Game) => game.name.startsWith(props.filterString));
	return (
		<>
			{filteredGames.map(game => {
				if (gamesVisibility.get(game.id) ?? true) {
					return <GameListRow key={game.id} img={game.img} name={game.name} series={game.series} />;
				}
			})}
		</>
	);
};

const mapStateToProps = (state: AppStore, ownProps: GamesFilterProps): Partial<GamesListProps> => {
	return {
		games: Array.from(state.games.values()),
		gamesVisibility: state.gamesVisibility,
		filterString: ownProps.filterString,
	};
};

export default connect(mapStateToProps)(GamesList);
