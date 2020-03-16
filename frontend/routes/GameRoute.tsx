import * as React from 'react';
import { BreadcrumbActions, AppStore } from '../storage/common';
import { Game } from '../storage/models/Game';
import { GameSeries } from '../storage/models/GameSeries';
import { Image, DefaultImage } from '../storage/models/Image';
import { RouteComponentProps, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';
import { GameView } from '../views/GameView';

interface GameRouteProps {
	games: Map<number, Game>;
	gameSeries: Map<number, GameSeries>;
	images: Map<number, Image>;
	chosenGameId: number;
	dispatch: Dispatch<AnyAction>;
}
interface MatchParams {
	gameId: string;
}
export class GameRoute extends React.Component<GameRouteProps> {
	gameExists: boolean;
	constructor(props: GameRouteProps) {
		super(props);
		if (props.games.has(props.chosenGameId)) {
			this.gameExists = true;
			const chosenSeries = props.gameSeries.get(props.games.get(props.chosenGameId)!.seriesId)!;
			if (!chosenSeries) {
				throw new ReferenceError(
					`Game with id: ${props.chosenGameId} have a missing game series associated with it. Game Series Id:${
						this.props.games.get(this.props.chosenGameId)!.seriesId
					}`
				);
			}
		} else {
			this.gameExists = false;
		}
	}
	public componentDidMount() {
		if (this.gameExists) {
			this.props.dispatch(BreadcrumbActions.setBreadcrumb(this.props.games.get(this.props.chosenGameId)!.title));
		}
	}
	public render() {
		if (this.gameExists) {
			const game = this.props.games.get(this.props.chosenGameId)!;
			const series = this.props.gameSeries.get(game.seriesId)!;
			const image = this.props.images.get(game.imageId) || DefaultImage;
			return <GameView game={game} series={series} image={image} />;
		} else {
			return <Redirect to="/games" />;
		}
	}
}
const mapStateToProps = (state: AppStore, ownProps: RouteComponentProps<MatchParams>): Partial<GameRouteProps> => {
	return {
		games: state.games,
		gameSeries: state.gameSeries,
		images: state.images,
		chosenGameId: Number.parseInt(ownProps.match.params.gameId),
	};
};

export default connect(mapStateToProps)(GameRoute);
