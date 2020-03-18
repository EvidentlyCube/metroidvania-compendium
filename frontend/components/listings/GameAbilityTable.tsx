import React from 'react';
import styled from 'styled-components';
import { Theme } from '../styles/themes';

const Table = styled.table`
	width: 100%;

	th {
		text-align: left;
		color: ${Theme.colorHeader};
	}
`;

export function GameAbilityTable(props: any) {
	return (
		<Table>
			<thead>
				<tr>
					<th>Ability</th>
					<th>In-Game name</th>
					<th>Description</th>
				</tr>
			</thead>
			<tbody>{props.children}</tbody>
		</Table>
	);
}
