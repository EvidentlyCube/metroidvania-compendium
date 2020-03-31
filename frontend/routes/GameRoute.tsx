import * as React from 'react';

import { Redirect, RouteComponentProps } from 'react-router-dom';
import { GameView, GameViewProps } from '../views/GameView';
import { FetchGame } from '../storage/utils/fetchGameData';

interface GameRouterState {
	isDataFetched: boolean;
	doesGameExistsInDb: boolean;
	gameViewProps: GameViewProps | null;
}

interface GameRouteProps {
	gameId: string;
}

export class GameRoute extends React.Component<RouteComponentProps<GameRouteProps>, GameRouterState> {
	constructor(props: RouteComponentProps<GameRouteProps>) {
		super(props);
		this.state = {
			isDataFetched: false,
			doesGameExistsInDb: true,
			gameViewProps: null,
		};
	}
	public async componentDidMount() {
		try {
			const gameViewProps = await FetchGame.viewData(Number.parseInt(this.props.match.params.gameId));
			this.setState({ gameViewProps, doesGameExistsInDb: true, isDataFetched: true });
		} catch (error) {
			console.log(error);
			this.setState({ doesGameExistsInDb: false, isDataFetched: true });
		}
	}
	public render() {
		if (this.state.isDataFetched) {
			if (this.state.doesGameExistsInDb) {
				return <GameView {...this.state.gameViewProps!} />;
			} else {
				return <Redirect to="/games" />;
			}
		} else {
			return <></>;
		}
	}
}
