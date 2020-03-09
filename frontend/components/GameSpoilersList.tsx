import * as React from 'react';
import { connect } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import {AppStore} from '../storage/common';
interface GameVisibilityListProps{
	gamesVisibility: Map<number, boolean>;
}
const GameSpoilersList: React.FC<GameVisibilityListProps> = (props: GameVisibilityListProps) =>{
//I couldn't do destructuring, because i get following error: 'Property 'gameSpoilers' does not exist on type 'Map<number, GameSpoilers>''
	const {gamesVisibility} = props;

	return (
		<>
			{Array.from(gamesVisibility.entries()).map(game=> {
				return <GameSpoilersComponent key={game[0]} name='{game.name}' showSpoilers={game[1]} id={game[0]} />;
			})}
		</>
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

const mapStateToProps = (state: AppStore): GameVisibilityListProps => {
	return {
		gamesVisibility: state.gamesVisibility,
	};
};
export default connect(mapStateToProps)(GameSpoilersList);
