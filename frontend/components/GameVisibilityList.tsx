import * as React from 'react';
import { connect } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import {AppStore} from '../storage/common';
import { Game } from '../storage/models/Game';
interface GameVisibilityListProps{
	gameVisibilityToggleMap: Map<number, GameVisibilityToggleProps>;
}
const GamesVisibilityList: React.FC<GameVisibilityListProps> = (props: GameVisibilityListProps) =>{
	const {gameVisibilityToggleMap} = props;
	const gamesVisibility = Array.from(gameVisibilityToggleMap.values());
	return (
		<>
			{gamesVisibility.map(entry=> {
				return <GameVisibilityToggle key={entry.game.id} game={entry.game} isVisible={entry.isVisible} />;
			})}
		</>
	);
};
interface GameVisibilityToggleProps {
	game: Game;
	isVisible: boolean;
}

const GameVisibilityToggle: React.FC<GameVisibilityToggleProps> = (props) => 
	<div>
		<input type="checkbox" checked = {props.isVisible} name={`${props.game.name}: ${props.game.id}`} id={`spoiler #${props.game.id}`}/> {props.game.name}
	</div>;

const mapStateToProps = (state: AppStore): GameVisibilityListProps => {
	const {games, gamesVisibility} = state;
	const gameVisibilityToggleMap = new Map<number, GameVisibilityToggleProps>();
	for (const game of games.values()){
		gameVisibilityToggleMap.set(game.id, {game:game, isVisible: gamesVisibility.get(game.id) ?? true});
	}
	return {
		gameVisibilityToggleMap: gameVisibilityToggleMap,
	};
};
export default connect(mapStateToProps)(GamesVisibilityList);
