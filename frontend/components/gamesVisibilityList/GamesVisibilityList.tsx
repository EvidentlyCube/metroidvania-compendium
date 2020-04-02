import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';
import { AppStore, GameVisibilityActions } from '../../storage/common';
import { CheckboxRow } from '../generics/CheckboxRow';
import { Game } from '../../storage/models/Game';
interface GamesVisibilityFilterProps {
	games: Array<Game>;
}
interface GamesVisibilityListProps extends GamesVisibilityFilterProps {
	gamesVisibility: Map<number, boolean>;
	dispatch: Dispatch<AnyAction>;
}

const GamesVisibilityList: React.FC<GamesVisibilityListProps> = (props: GamesVisibilityListProps) => {
	const dispatchGameVisibility = (value: string, checkValue: boolean) => {
		const gameId = parseInt(value);
		props.dispatch(GameVisibilityActions.setGameVisibility(gameId, !checkValue));
	};
	const { games, gamesVisibility } = props;
	return (
		<>
			{games.map(game => {
				const isGameVisible = gamesVisibility.get(game.id) ?? true;
				return (
					<CheckboxRow
						key={game.id}
						id={`gameVisibility_${game.id}`}
						label={game.title}
						checked={isGameVisible}
						value={`${game.id}`}
						callback={dispatchGameVisibility}
					/>
				);
			})}
		</>
	);
};

const mapStateToProps = (state: AppStore, ownProps: GamesVisibilityFilterProps): Partial<GamesVisibilityListProps> => {
	return {
		games: ownProps.games,
		gamesVisibility: state.gamesVisibility,
	};
};

export default connect(mapStateToProps)(GamesVisibilityList);
