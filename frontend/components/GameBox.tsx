import React from 'react';
import styled from 'styled-components';
import { Theme } from './styles/themes';
import { Image } from '../storage/models/Image';
import { Environment } from '../storage/models/Environment';

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
interface GameBoxProps {
	image: Image;
	environments: Array<Environment>;
}
export const GameBox: React.FC<GameBoxProps> = (props: GameBoxProps) => {
	return (
		<Box>
			<BoxArt src={props.image.fileUrl} />
			<Header>Released on:</Header>
			<List>
				{props.environments.map(environment => {
					return (
						<Item key={environment.id} href={environment.wikiUrl}>
							{environment.name}
						</Item>
					);
				})}
			</List>
		</Box>
	);
};
