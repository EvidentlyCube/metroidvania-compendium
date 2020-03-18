import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Row = styled.tr`
	line-height: 150%;
`;
export interface GameAbilityRowProps {
	abilityId: number;
	exampleId: number;
	abilityName: string;
	exampleName: string;
	description: string;
}
export const GameAbilityRow: React.FC<GameAbilityRowProps> = (props: GameAbilityRowProps) => {
	return (
		<Row>
			<td>
				<Link to={`abilities/${props.abilityId}`}>{props.abilityName}</Link>
			</td>
			<td>{props.exampleName}</td>
			<td>{props.description}</td>
		</Row>
	);
};
