import React from 'react';
import styled from 'styled-components';
import { Theme } from './themes';

const Comp = styled.div`
	padding-top: ${Theme.headerHeight};
	display: flex;
	flex-direction: column;
`;

export function PageLayout(props: any) {
	return <Comp>{props.children}</Comp>;
}
