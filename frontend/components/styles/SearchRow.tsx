import React from 'react';
import styled from 'styled-components';
import { Theme } from './themes';

const Input = styled.input`
	display: block;
	width: 100%;
	border: none;
	background: ${Theme.colorAccentBg};
	font-size: 24px;
	padding: 5px;
`;

export function SearchRow(props: any) {
	return <Input type="text" value={props.value} onChange={props.onChange} placeholder={props.placeholder} name={props.name} />;
}
