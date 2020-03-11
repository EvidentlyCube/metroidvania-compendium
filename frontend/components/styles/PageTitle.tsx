import React from 'react';
import styled from 'styled-components';
import { Theme } from './themes';

const Header = styled.h1`
	color: ${Theme.colorHeader};
	font-size: 32px;
	margin-top: 0;
	margin-bottom: 0;
`;

export function PageTitle(props: any) {
	return <Header>{props.children}</Header>;
}
