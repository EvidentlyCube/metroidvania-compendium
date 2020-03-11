import React from 'react';
import styled from 'styled-components';

const Comp = styled.div`
	flex: 1 0;
	padding: 20px;
`;

export function Content(props: any) {
	return <Comp>{props.children}</Comp>;
}
