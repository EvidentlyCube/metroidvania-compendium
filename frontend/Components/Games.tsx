import * as React from 'react';
export interface GameProps {
	game: string;
}

export const GamesCheck: React.FC<GameProps> = (props) => <>
	<div>
		<input type="checkbox" name={props.game} id="check-index"/> {props.game}
	</div>

</>;

