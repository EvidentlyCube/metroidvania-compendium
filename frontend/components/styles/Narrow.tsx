import React from 'react';
import styled from 'styled-components';

const Comp = styled.div`
	width: 800px;
	margin: 0 auto;
`;

export function Narrow(props: any) {
	return <Comp>{props.children}</Comp>;
}
