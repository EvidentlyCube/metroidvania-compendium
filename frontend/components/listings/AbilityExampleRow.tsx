import React from 'react';
import styled from 'styled-components';
import { AbilityIcon } from './AbilityIcon';
import { Image } from '../../storage/models/Image';

const Row = styled.tr`
	line-height: 150%;
`;
export interface AbilityExampleRowProps {
	image: Image;
	gameId: number;
	gameName: string;
	name: string;
	description: string;
	id: number;
}

export const AbilityExampleRow: React.FC<AbilityExampleRowProps> = (props: AbilityExampleRowProps) => {
	return (
		<Row>
			<td>
				<AbilityIcon image={props.image} />
			</td>
			<td>
				<a href={`/game/${props.gameId}`}>{props.gameName}</a>
			</td>
			<td>{props.name}</td>
			<td>{props.description}</td>
		</Row>
	);
};
