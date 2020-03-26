import * as React from 'react';
import { fetchGameAbilitiesListData } from '../storage/utils/fetchGameData';
import { GameAbilitiesListProps, GameAbilitiesList } from '../components/GameAbilitiesList';

interface SmartGameAbilitiesListState {
	isDataAvailable: boolean;
	gameAbilitiesListProps: GameAbilitiesListProps | null;
}

interface SmartGameAbilitiesListProps {
	gameId: number;
}

export class SmartGameAbilitiesList extends React.Component<SmartGameAbilitiesListProps, SmartGameAbilitiesListState> {
	constructor(props: SmartGameAbilitiesListProps) {
		super(props);
		this.state = {
			isDataAvailable: false,
			gameAbilitiesListProps: null,
		};
	}
	public async componentDidMount() {
		try {
			const gameAbilitiesListProps = await fetchGameAbilitiesListData(this.props.gameId);
			this.setState({ gameAbilitiesListProps, isDataAvailable: true });
		} catch (error) {
			console.log(error);
			this.setState({ isDataAvailable: false });
		}
	}
	public render() {
		if (this.state.isDataAvailable) {
			return <GameAbilitiesList {...this.state.gameAbilitiesListProps!} />;
		} else {
			return <></>;
		}
	}
}
