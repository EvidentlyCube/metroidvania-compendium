import * as React from 'react';
import { connect } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import {AppStore} from '../storage/common';
interface GameVisibilityListProps{
	gameVisibilityToggleMap: Map<number, GameVisibilityToggleProps>;
}
const GamesVisibilityList: React.FC<GameVisibilityListProps> = (props: GameVisibilityListProps) =>{
	const {gameVisibilityToggleMap: gamesVisibility} = props;

	return (
		<>
			{Array.from(gamesVisibility.values()).map(game=> {
				return <GameVisibilityToggle key={game.id} name={game.name} isVisible={game.isVisible} id={game.id} />;
			})}
		</>
	);
};
interface GameVisibilityToggleProps {
	id: number;
	name: string;
	isVisible: boolean;
}

const GameVisibilityToggle: React.FC<GameVisibilityToggleProps> = (props) => <>
	<div>
		<input type="checkbox" checked = {props.isVisible} name={props.name} id={`spoiler #${props.id}`}/> {props.name}
	</div>

</>;

const mapStateToProps = (state: AppStore): GameVisibilityListProps => {
	const games = state.games;
	const gamesVisibility = state.gamesVisibility;
	const gameVisibilityToggleMap = new Map<number, GameVisibilityToggleProps>();
	Array.from(games.values()).map(game =>{
		gameVisibilityToggleMap.set(
			game.gameId,
			{id: game.gameId, name: game.gameName, isVisible: gamesVisibility.get(game.gameId) ?? true},
		);
	});
	return {
		gameVisibilityToggleMap: gameVisibilityToggleMap,
	};
};
export default connect(mapStateToProps)(GamesVisibilityList);
