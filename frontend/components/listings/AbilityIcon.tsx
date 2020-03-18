import React from 'react';
import styled from 'styled-components';
import HijumpIcon from '../../assets/cover_default.jpg';
import { Theme } from '../styles/themes';

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

export function AbilityIcon() {
	return (
		<Container>
			<Img src={HijumpIcon} />
		</Container>
	);
}
