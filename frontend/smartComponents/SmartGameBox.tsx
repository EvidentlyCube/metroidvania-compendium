import * as React from 'react';
import { fetchGameBoxData } from '../storage/utils/fetchGameData';
import { GameBox, GameBoxProps } from '../components/GameBox';

interface SmartGameBoxState {
	isDataAvailable: boolean;
	gameBoxProps: GameBoxProps | null;
}

interface SmartGameBoxProps {
	gameId: number;
}

export class SmartGameBox extends React.Component<SmartGameBoxProps, SmartGameBoxState> {
	constructor(props: SmartGameBoxProps) {
		super(props);
		this.state = {
			isDataAvailable: false,
			gameBoxProps: null,
		};
	}
	public async componentDidMount() {
		try {
			const gameBoxProps = await fetchGameBoxData(this.props.gameId);
			this.setState({ gameBoxProps, isDataAvailable: true });
		} catch (error) {
			console.log(error);
			this.setState({ isDataAvailable: false });
		}
	}
	public render() {
		if (this.state.isDataAvailable) {
			return <GameBox {...this.state.gameBoxProps!} />;
		} else {
			return <></>;
		}
	}
}
