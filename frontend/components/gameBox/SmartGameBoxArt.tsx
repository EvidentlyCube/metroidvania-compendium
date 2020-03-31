import React from 'react';
import { Image, DefaultImage } from '../../storage/models/Image';
import { FetchGame } from '../../storage/utils/fetchGameData';
import { GameBoxArt } from './GameBoxArt';

interface SmartGameBoxArtState {
	isDataAvailable: boolean;
	image: Image | null;
}

interface SmartGameBoxArtProps {
	gameId: number;
}

export class SmartGameBoxArt extends React.Component<SmartGameBoxArtProps, SmartGameBoxArtState> {
	constructor(props: SmartGameBoxArtProps) {
		super(props);
		this.state = {
			isDataAvailable: false,
			image: null,
		};
	}
	public async componentDidMount() {
		try {
			const game = await FetchGame.findGameById(this.props.gameId);
			const image = game.imageId ? await FetchGame.findImageById(game.imageId) : DefaultImage;
			this.setState({ image, isDataAvailable: true });
		} catch (error) {
			console.log(error);
			this.setState({ isDataAvailable: false });
		}
	}
	public render() {
		if (this.state.isDataAvailable) {
			return <GameBoxArt imageUrl={this.state.image!.fileUrl} />;
		} else {
			return <></>;
		}
	}
}
