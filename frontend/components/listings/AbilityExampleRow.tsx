import React from 'react';
import styled from 'styled-components';
import { AbilityIcon } from './AbilityIcon';

const Row = styled.tr`
	line-height: 150%;
`;

export function AbilityExampleRow() {
	return (
		<Row>
			<td>
				<AbilityIcon />
			</td>
			<td>
				<a href="#">Super Metroid</a>
			</td>
			<td>Hi-Jump Boots</td>
			<td>Increases Samus&apos;s jump height significantly.</td>
		</Row>
	);
}
