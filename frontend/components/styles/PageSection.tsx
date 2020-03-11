import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
	margin-top: 0;
	margin-bottom: 40px;
`;

export function PageSection(props: any) {
	return <Section>{props.children}</Section>;
}
