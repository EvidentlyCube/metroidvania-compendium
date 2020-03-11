import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
	margin-top: 0;
	margin-bottom: 40px;
`;

export function PageHeader(props: any) {
	return <Header>{props.children}</Header>;
}
