import React from 'react';
import styled from 'styled-components';
import { Theme } from './themes';

const Header = styled.h2`
	color: ${Theme.colorHeader};
	font-size: ${Theme.sectionHeaderSize};
	margin-top: 0;
`;

export function SectionHeader(props: any) {
	return <Header>{props.children}</Header>;
}
