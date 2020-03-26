import React from 'react';
import styled from 'styled-components';
import { fetchEnvironments } from '../../storage/utils/fetchGameData';
import { Environment } from '../../storage/models/Environment';

const Item = styled.a`
	font-size: 12px;
	margin-left: 20px;
	display: list-item;
	list-style: circle;
`;

interface GameBoxEnvironmentListState {
	isDataAvailable: boolean;
	environments: Array<Environment> | null;
}

interface GameBoxEnvironmentListProps {
	gameId: number;
}

export class GameBoxEnvironmentList extends React.Component<GameBoxEnvironmentListProps, GameBoxEnvironmentListState> {
	constructor(props: GameBoxEnvironmentListProps) {
		super(props);
		this.state = {
			isDataAvailable: false,
			environments: null,
		};
	}
	public async componentDidMount() {
		try {
			this.setState({ environments: await fetchEnvironments(this.props.gameId), isDataAvailable: true });
		} catch (error) {
			console.log(error);
			this.setState({ isDataAvailable: false });
		}
	}
	public render() {
		if (this.state.isDataAvailable) {
			return (
				<>
					{this.state.environments!.map(environment => {
						if (environment) {
							return (
								<Item key={environment.id} href={environment.wikiUrl}>
									{environment.name}
								</Item>
							);
						}
					})}
				</>
			);
		} else {
			return <></>;
		}
	}
}
