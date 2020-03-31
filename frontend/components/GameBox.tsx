import React from 'react';
import styled from 'styled-components';
import { Theme } from './styles/themes';
import { SmartGameBoxArt } from './gameBox/SmartGameBoxArt';
import { SmartGameBoxEnvironmentList } from './gameBox/SmartGameBoxEnvironmentList';

const Box = styled.div`
	float: right;
	padding: 10px;
	display: flex;
	flex-direction: column;
	margin-left: 10px;
	background: ${Theme.colorAccentBg};
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

export interface GameBoxProps {
	gameId: number;
}
export const GameBox: React.FC<GameBoxProps> = (props: GameBoxProps) => {
	return (
		<Box>
			<SmartGameBoxArt gameId={props.gameId} />
			<Header>Released on:</Header>
			<List>
				<SmartGameBoxEnvironmentList gameId={props.gameId} />
			</List>
		</Box>
	);
};
