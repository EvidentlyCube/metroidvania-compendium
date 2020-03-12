import React from 'react';
import styled from 'styled-components';
import { Theme } from '../styles/themes';
import { PageTitle } from '../styles/PageTitle';
import { PageSubtitle } from '../styles/PageSubtitle';

const Box = styled.a`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-bottom: 20px;
	text-decoration: none;

	&:hover {
		background: ${Theme.colorAccentBg};
	}
`;

const BoxArt = styled.img`
	height: 100px;
	background-color: black;
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	margin-right: 40px;
	flex: 0 0 150px;
`;

const Titles = styled.div`
	display: flex;
	flex-direction: column;
`;
interface GameListRowProps {
	imgUrl: string;
	name: string;
	series: string;
	id: string;
}
export function GameListRow(props: GameListRowProps) {
	return (
		<Box href="#">
			<BoxArt src={props.imgUrl} />
			<Titles>
				<PageTitle>{props.name}</PageTitle>
				<PageSubtitle>{props.series}</PageSubtitle>
			</Titles>
		</Box>
	);
}
