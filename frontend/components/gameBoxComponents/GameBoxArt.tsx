import React from 'react';
import styled from 'styled-components';
import { Image, DefaultImage } from '../../storage/models/Image';
import { fetchGameBoxArt } from '../../storage/utils/fetchGameData';
const BoxArt = styled.img`
	width: 320px;
	margin-bottom: 20px;
`;
interface GameBoxArtState {
	isDataAvailable: boolean;
	image: Image | null;
}

interface GameBoxArtProps {
	gameId: number;
}

export class GameBoxArt extends React.Component<GameBoxArtProps, GameBoxArtState> {
	constructor(props: GameBoxArtProps) {
		super(props);
		this.state = {
			isDataAvailable: false,
			image: null,
		};
	}
	public async componentDidMount() {
		try {
			this.setState({ image: (await fetchGameBoxArt(this.props.gameId)) || DefaultImage, isDataAvailable: true });
		} catch (error) {
			console.log(error);
			this.setState({ isDataAvailable: false });
		}
	}
	public render() {
		if (this.state.isDataAvailable) {
			return <BoxArt src={this.state.image!.fileUrl} />;
		} else {
			return <></>;
		}
	}
}
