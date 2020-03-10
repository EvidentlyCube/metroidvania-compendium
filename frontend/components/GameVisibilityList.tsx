import * as React from 'react';
import { connect } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import {AppStore} from '../storage/common';
import { Game } from '../storage/models/Game';
interface GameVisibilityListProps{
	gameVisibilityToggleArray: Array<GameVisibilityToggleProps>;
}
const GamesVisibilityList: React.FC<GameVisibilityListProps> = (props: GameVisibilityListProps) =>{
	const {gameVisibilityToggleArray} = props;
	return (
		<>
			{gameVisibilityToggleArray.map(entry=> {
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
	const gameVisibilityToggleArray = new Array<GameVisibilityToggleProps>();
	for (const game of games.values()){
		gameVisibilityToggleArray.push({game:game, isVisible: gamesVisibility.get(game.id) ?? true});
	}
	return {
		gameVisibilityToggleArray: gameVisibilityToggleArray,
	};
};
export default connect(mapStateToProps)(GamesVisibilityList);
