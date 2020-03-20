import React from 'react';
import styled from 'styled-components';
import { Theme } from '../styles/themes';
import { Image } from '../../storage/models/Image';

const Container = styled.tr`
	width: 54px;
	height: 54px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${Theme.colorDarkBg};
`;

const Img = styled.img`
	width: 48px;
	height: 48px;
	flex: 0 0 48px;
	display: block;
	background: black;
`;
interface AbilityIconProps {
	image: Image;
}
export const AbilityIcon: React.FC<AbilityIconProps> = (props: AbilityIconProps) => {
	return (
		<Container>
			<Img src={props.image.fileUrl} />
		</Container>
	);
};
