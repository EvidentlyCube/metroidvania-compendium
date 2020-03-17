import React from 'react';
import styled from 'styled-components';
import { Theme } from '../styles/themes';

const Row = styled.tr`
	td {
		padding-top: 20px;
		padding-left: 20px;
		color: ${Theme.colorAlt};
	}
`;

export function GameAbilityRowSeparator(props: any) {
	return (
		<Row>
			<td colSpan={3}>{props.children}</td>
		</Row>
	);
}
