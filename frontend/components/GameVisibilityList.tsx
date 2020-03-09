import * as React from 'react';
import { connect } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import {AppStore} from '../storage/common';
interface GameVisibilityListProps{
	gamesVisibility: Map<number, boolean>;
}
const GamesVisibilityList: React.FC<GameVisibilityListProps> = (props: GameVisibilityListProps) =>{
	const {gamesVisibility} = props;

	return (
		<>
			{Array.from(gamesVisibility.entries()).map(game=> {
				return <GameVisibilityToggle key={game[0]} name='{game.name}' isVisible={game[1]} id={game[0]} />;
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
	return {
		gamesVisibility: state.gamesVisibility,
	};
};
export default connect(mapStateToProps)(GamesVisibilityList);
