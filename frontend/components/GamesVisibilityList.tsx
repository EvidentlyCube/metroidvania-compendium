import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';
import { AppStore, GameVisibilityActions } from '../storage/common';
import { CheckboxRow } from './generics/CheckboxRow';
import { Game } from '../storage/models/Game';
interface GamesVisibilityListProps {
	games: Array<Game>;
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
			{games.map(entry => {
				const isGameVisible = gamesVisibility.get(entry.id) ?? true;
				return (
					<CheckboxRow
						key={entry.id}
						id={`gameVisibility_${entry.id}`}
						label={entry.name}
						defaultCheckValue={isGameVisible}
						value={`${entry.id}`}
						callback={dispatchGameVisibility}
					/>
				);
			})}
		</>
	);
};

const mapStateToProps = (state: AppStore): Partial<GamesVisibilityListProps> => {
	return {
		games: Array.from(state.games.values()),
		gamesVisibility: state.gamesVisibility,
	};
};

export default connect(mapStateToProps)(GamesVisibilityList);
