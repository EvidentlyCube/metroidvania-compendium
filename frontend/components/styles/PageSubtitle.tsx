import React from 'react';
import styled from 'styled-components';
import { Theme } from './themes';

const Header = styled.h2`
	color: ${Theme.colorAlt};
	font-size: 16px;
	margin-top: 0;
	margin-bottom: 0;
	font-weight: lighter;
	a {
		display: inline-block;
		text-decoration: none;
		&:hover {
			text-decoration: underline;
		}
	}
`;

export function PageSubtitle(props: any) {
	return <Header>{props.children}</Header>;
}
