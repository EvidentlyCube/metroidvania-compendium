import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Narrow } from '../components/styles/Narrow';

const Box = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

const Title = styled.h1`
	font-size: 5vw;
	text-align: center;
	text-decoration: underline;
`;

const Description = styled.article`
	font-size: 24px;
	text-align: justify;
	a {
		display: inline-block;
		text-decoration: none;
		&:hover {
			text-decoration: underline;
		}
	}
`;
export class HomeView extends React.Component {
	public render() {
		return (
			<Box>
				<Title>Metroidvania Compendium</Title>
				<Narrow>
					<Description>
						<p>
							A comprehensive compendium of abilities in Metroidvania games. Perfect research material for your own game. Excellent if you want to
							learn more about the genre you love. Invaluable source of inspiration for any kind of game.
						</p>
						<h2>Beware spoilers!</h2>
						<p>
							<Link to="/config">Configure your experience</Link> to avoid them.
						</p>
					</Description>
				</Narrow>
			</Box>
		);
	}
}
