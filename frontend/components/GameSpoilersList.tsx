import * as React from 'react';
import { connect } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import {AppStore} from '../storage/common';
// eslint-disable-next-line no-unused-vars
import { GameSpoilers } from '../storage/models/GameSpoilers';
interface GameSpoilersListProps{
	gameSpoilers: Map<number, GameSpoilers>;
}
const GameSpoilersList: React.FC<GameSpoilersListProps> = (props: GameSpoilersListProps) =>{
//I couldn't do destructuring, because i get following error: 'Property 'gameSpoilers' does not exist on type 'Map<number, GameSpoilers>''
	const gameSpoilers = props.gameSpoilers;

	return (
		<React.Fragment>
			{[...gameSpoilers.values()].map(game=> {
				return <GameSpoilersComponent key={game.gameId} name={game.name} showSpoilers={game.showSpoilers} id={game.gameId} />;
			})}
		</React.Fragment>
	);
};
interface GameSpoilersComponentProps {
	id: number;
	name: string;
	showSpoilers: boolean;
}

const GameSpoilersComponent: React.FC<GameSpoilersComponentProps> = (props) => <>
	<div>
		<input type="checkbox" checked = {props.showSpoilers} name={props.name} id={`spoiler #${props.id}`}/> {props.name}
	</div>

</>;

const mapStateToProps = (state: AppStore): GameSpoilersListProps => {
	return {
		gameSpoilers: state.gameSpoilers || new Map(),
	};
};
//Test comment to add any changes
export default connect(mapStateToProps)(GameSpoilersList);
