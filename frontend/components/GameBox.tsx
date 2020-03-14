import React from 'react';
import styled from 'styled-components';
import { Theme } from './styles/themes';

const Box = styled.div`
	float: right;
	padding: 10px;
	display: flex;
	flex-direction: column;
	margin-left: 10px;
	background: ${Theme.colorAccentBg};
`;

const BoxArt = styled.img`
	width: 320px;
	margin-bottom: 20px;
`;

const Header = styled.h6`
	font-size: 14px;
	margin: 0;
`;

const List = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 20px;
`;
const Item = styled.a`
	font-size: 12px;
	margin-left: 20px;
	display: list-item;
	list-style: circle;
`;

export function GameBox() {
	return (
		<Box>
			<BoxArt src="https://steamuserimages-a.akamaihd.net/ugc/90469956945157107/05A816D9D18F48CEE9FE3E0AA8706B0BF81B669E/" />
			<Header>Released on:</Header>
			<List>
				<Item href="#">SNES</Item>
				<Item href="#">DS (Ambassador Program)</Item>
			</List>
			<Header>Links:</Header>
			<List>
				<Item href="#">SNES</Item>
				<Item href="#">DS (Ambassador Program)</Item>
			</List>
		</Box>
	);
}
