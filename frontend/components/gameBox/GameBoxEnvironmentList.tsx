import React from 'react';
import styled from 'styled-components';
import { Environment } from '../../storage/models/Environment';

const Item = styled.a`
	font-size: 12px;
	margin-left: 20px;
	display: list-item;
	list-style: circle;
`;
interface GameBoxEnvironmentListProps {
	environments: Environment[];
}
export const GameBoxEnvironmentList: React.FC<GameBoxEnvironmentListProps> = (props: GameBoxEnvironmentListProps) => {
	return (
		<>
			{props.environments.map(environment => {
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
};
