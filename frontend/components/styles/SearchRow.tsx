import React from 'react';
import styled from 'styled-components';
import debounce from 'lodash.debounce';
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
	const debouncedOnChange = debounce(value => props.onChange(value), 500);
	return (
		<Input type="text" value={props.value} onChange={event => debouncedOnChange(event.target.value)} placeholder={props.placeholder} name={props.name} />
	);
}
