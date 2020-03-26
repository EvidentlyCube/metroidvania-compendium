import React from 'react';
import styled from 'styled-components';

const BoxArt = styled.img`
	width: 320px;
	margin-bottom: 20px;
`;

interface GameBoxArtProps {
	imageUrl: string;
}
export const GameBoxArt: React.FC<GameBoxArtProps> = (props: GameBoxArtProps) => {
	return <BoxArt src={props.imageUrl} />;
};
