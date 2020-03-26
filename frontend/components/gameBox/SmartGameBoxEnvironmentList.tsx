import React from 'react';
import { FetchGame } from '../../storage/utils/fetchGameData';
import { Environment } from '../../storage/models/Environment';
import { GameBoxEnvironmentList } from './GameBoxEnvironmentList';

interface SmartGameBoxEnvironmentListState {
	isDataAvailable: boolean;
	environments: Array<Environment> | null;
}

interface SmartGameBoxEnvironmentListProps {
	gameId: number;
}

export class SmartGameBoxEnvironmentList extends React.Component<SmartGameBoxEnvironmentListProps, SmartGameBoxEnvironmentListState> {
	constructor(props: SmartGameBoxEnvironmentListProps) {
		super(props);
		this.state = {
			isDataAvailable: false,
			environments: null,
		};
	}
	public async componentDidMount() {
		try {
			this.setState({ environments: await FetchGame.environments(this.props.gameId), isDataAvailable: true });
		} catch (error) {
			console.log(error);
			this.setState({ isDataAvailable: false });
		}
	}
	public render() {
		if (this.state.isDataAvailable) {
			return (
				<>
					<GameBoxEnvironmentList environments={this.state.environments!} />
				</>
			);
		} else {
			return <></>;
		}
	}
}
