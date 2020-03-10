import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
	color: white;
	display: inline-block;
	padding: 0 10px;
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
`;

export function HeaderLink(props: any) {
	function change(event: any) {
		event.preventDefault();
		event.stopPropagation();

		props.onChange(props.value);
	}

	return (
		<Link href="#" onClick={change}>
			{props.children}
		</Link>
	);
}
