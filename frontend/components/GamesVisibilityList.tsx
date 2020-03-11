import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';
import { AppStore, GameVisibilityActions } from '../storage/common';
import { CheckboxRow } from './generics/CheckboxRow';
import { Game } from '../storage/models/Game';
interface GamesVisibilityListProps {
	gamesVisibility: Map<Game, boolean>;
	dispatch: Dispatch<AnyAction>;
}

const GamesVisibilityList: React.FC<GamesVisibilityListProps> = (props: GamesVisibilityListProps) => {
	const callbackFunction = (value: string, checkValue: boolean) => {
		const gameNumber = parseInt(value);
		props.dispatch(GameVisibilityActions.setGameVisibility(gameNumber, !checkValue));
	};
	const { gamesVisibility } = props;
	const arrayOfGames = Array.from(gamesVisibility.entries());
	return (
		<>
			{arrayOfGames.map(entry => {
				return (
					<CheckboxRow
						key={entry[0].id}
						id={`gameVisibility_${entry[0].id}`}
						label={entry[0].name}
						defaultCheckValue={entry[1] ?? true}
						value={`${entry[0].id}`}
						callback={callbackFunction}
					/>
				);
			})}
		</>
	);
};

const mapStateToProps = (state: AppStore): Partial<GamesVisibilityListProps> => {
	const { games, gamesVisibility } = state;
	const gamesMap = new Map<Game, boolean>();
	for (const game of games.values()) {
		gamesMap.set(game, gamesVisibility.get(game.id) ?? true);
	}
	return {
		gamesVisibility: gamesMap,
	};
};

export default connect(mapStateToProps)(GamesVisibilityList);
