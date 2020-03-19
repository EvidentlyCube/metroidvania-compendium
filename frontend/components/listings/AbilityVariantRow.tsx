import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
	display: list-item;
	margin-left: 30px;
	width: 100%;
	margin-bottom: 10px;
`;

export function AbilityVariantRow(props: any) {
	return <Row>{props.children}</Row>;
}
