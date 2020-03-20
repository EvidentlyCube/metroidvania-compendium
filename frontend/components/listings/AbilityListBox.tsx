import React from 'react';
import styled from 'styled-components';
import { Theme } from '../styles/themes';
import { PageTitle } from '../styles/PageTitle';
import { PageSubtitle } from '../styles/PageSubtitle';
import { Link } from 'react-router-dom';

const Box = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-bottom: 20px;
	text-decoration: none;

	background: ${Theme.colorAccentBg};
	padding: 10px 20px 20px;
	box-sizing: border-box;
	flex: 0 0 390px;

	&:hover {
		background: ${Theme.colorAccentBg};
	}
	a {
		color: inherit;
		text-decoration: inherit;
	}
`;

const Title = styled.header`
	font-size: 32px;
	margin-top: 0;
	margin-bottom: 20px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

const Description = styled.article``;
interface AbilityListBoxProps {
	id: number;
	name: string;
	category: string;
	group: string;
	description: string;
}

export const AbilityListBox: React.FC<AbilityListBoxProps> = (props: AbilityListBoxProps) => {
	const maxLength = 150;
	let { description } = props;
	if (description.length >= maxLength) {
		description = description.substr(0, description.lastIndexOf(' ', maxLength)) + '...';
	}
	return (
		<Box>
			<Link to={`/ability/${props.id}`}>
				<Title>
					<PageTitle>{props.name}</PageTitle>
					<PageSubtitle>
						{props.category} » {props.group}
					</PageSubtitle>
				</Title>
				<Description>{description}</Description>
			</Link>
		</Box>
	);
};
