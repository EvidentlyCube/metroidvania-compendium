import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';
import { AppStore, GameVisibilityActions } from '../storage/common';
import { Game } from '../storage/models/Game';
interface GamesVisibilityListProps {
	gameVisibilityToggles: Array<GameVisibilityProps>;
	dispatch: Dispatch<AnyAction>;
}
const GamesVisibilityList: React.FC<GamesVisibilityListProps> = (props: GamesVisibilityListProps) => {
	const { gameVisibilityToggles } = props;
	return (
		<>
			{gameVisibilityToggles.map(entry => {
				return <GameVisibilityToggle key={entry.game.id} game={entry.game} isVisible={entry.isVisible} dispatch={props.dispatch} />;
			})}
		</>
	);
};
interface GameVisibilityProps {
	game: Game;
	isVisible: boolean;
}
interface GameVisibilityToggleProps extends GameVisibilityProps {
	dispatch: Dispatch<AnyAction>;
}

const GameVisibilityToggle: React.FC<GameVisibilityToggleProps> = props => (
	<div>
		<input
			type="checkbox"
			onClick={() => props.dispatch(GameVisibilityActions.setGameVisibility(props.game.id, !props.isVisible))}
			defaultChecked={props.isVisible}
			name={`${props.game.name}: ${props.game.id}`}
			id={`spoiler #${props.game.id}`}
		/>{' '}
		{props.game.name}
	</div>
);

const mapStateToProps = (state: AppStore): Partial<GamesVisibilityListProps> => {
	const { games, gamesVisibility } = state;
	const gameVisibilityToggles = new Array<GameVisibilityProps>();
	for (const game of games.values()) {
		gameVisibilityToggles.push({ game: game, isVisible: gamesVisibility.get(game.id) ?? true });
	}
	return {
		gameVisibilityToggles: gameVisibilityToggles,
	};
};

export default connect(mapStateToProps)(GamesVisibilityList);
