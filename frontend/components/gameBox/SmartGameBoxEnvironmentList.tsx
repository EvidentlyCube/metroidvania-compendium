import React from 'react';
import styled from 'styled-components';
import { FetchGame } from '../../storage/utils/fetchGameData';
import { Environment } from '../../storage/models/Environment';

const Item = styled.a`
	font-size: 12px;
	margin-left: 20px;
	display: list-item;
	list-style: circle;
`;

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
