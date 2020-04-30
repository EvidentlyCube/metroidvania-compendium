import React from 'react';
import { FetchGame } from '../../storage/utils/fetchGameData';
import { Environment } from '../../storage/models/Environment';
import { GameBoxEnvironmentList } from './GameBoxEnvironmentList';
import { FetchHelperFunctions } from '../../storage/utils/fetchHelperFunctions';

interface SmartGameBoxEnvironmentListState {
	isDataAvailable: boolean;
	environments: Environment[];
}

interface SmartGameBoxEnvironmentListProps {
	gameId: number;
}

export class SmartGameBoxEnvironmentList extends React.Component<SmartGameBoxEnvironmentListProps, SmartGameBoxEnvironmentListState> {
	constructor(props: SmartGameBoxEnvironmentListProps) {
		super(props);
		this.state = {
			isDataAvailable: false,
			environments: [],
		};
	}
	public async componentDidMount() {
		try {
			const gameEnvironments = await FetchGame.lookupGameEnvironmentsByGameId(this.props.gameId);
			this.setState({
				environments: await FetchGame.lookupEnvironmentsByIds(FetchHelperFunctions.getUniqueValues(gameEnvironments, 'environmentId')),
				isDataAvailable: true,
			});
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
