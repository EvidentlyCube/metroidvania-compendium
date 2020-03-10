import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';
import { AppStore, GameVisibilityActions } from '../storage/common';
import { CheckboxRowProps, CheckboxRow } from './generics/CheckboxRow';
interface GamesVisibilityListProps {
	checkboxRows: Array<CheckboxRowProps>;
	dispatch: Dispatch<AnyAction>;
}
const GamesVisibilityList: React.FC<GamesVisibilityListProps> = (props: GamesVisibilityListProps) => {
	const callbackFunction = (name: string, checkValue: boolean) => {
		const gameNumber = parseInt(name);
		props.dispatch(GameVisibilityActions.setGameVisibility(gameNumber, !checkValue));
	};
	const { checkboxRows } = props;
	return (
		<>
			{checkboxRows.map(entry => {
				return <CheckboxRow key={entry.id} {...entry} callback={callbackFunction} />;
			})}
		</>
	);
};

const mapStateToProps = (state: AppStore): Partial<GamesVisibilityListProps> => {
	const { games, gamesVisibility } = state;
	const checkboxRowProps = new Array<CheckboxRowProps>();
	for (const game of games.values()) {
		checkboxRowProps.push({
			id: `${game.id}: gameVisibility`,
			label: game.name,
			defaultCheckValue: gamesVisibility.get(game.id) ?? true,
			name: `${game.id}`,
			callback: () => {},
		});
	}
	return {
		checkboxRows: checkboxRowProps,
	};
};

export default connect(mapStateToProps)(GamesVisibilityList);
