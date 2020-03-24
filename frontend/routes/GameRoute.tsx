import * as React from 'react';
import { AppStore } from '../storage/common';
import { Game } from '../storage/models/Game';
import { GameSeries } from '../storage/models/GameSeries';
import { Image, DefaultImage } from '../storage/models/Image';
import { RouteComponentProps, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';
import { GameView } from '../views/GameView';
import { GameEnvironment } from '../storage/models/GameEnvironment';
import { Environment } from '../storage/models/Environment';
import { AbilityExample } from '../storage/models/AbilityExample';
import { Ability } from '../storage/models/Ability';
import { AbilityGroup } from '../storage/models/AbilityGroup';
import { AbilityCategory } from '../storage/models/AbilityCategory';
import { createGameAbilitiesListData } from '../storage/utils/createGameAbilitiesListData';
import { requestGameData } from '../storage/utils/downloadGameData';

interface GameRouterState {
	isDataFetched: boolean;
	doesGameExistsInDb: boolean;
}

interface GameRouteProps {
	games: Map<number, Game>;
	gameSeries: Map<number, GameSeries>;
	images: Map<number, Image>;
	gameEnvironemnts: Array<GameEnvironment>;
	environemnts: Map<number, Environment>;
	abilityExamples: Array<AbilityExample>;
	abilities: Map<number, Ability>;
	abilityGroups: Map<number, AbilityGroup>;
	abilityCategories: Map<number, AbilityCategory>;
	chosenGameId: number;
	dispatch: Dispatch<AnyAction>;
}
interface MatchParams {
	gameId: string;
}
export class GameRoute extends React.Component<GameRouteProps, GameRouterState> {
	constructor(props: GameRouteProps) {
		super(props);
		this.state = {
			isDataFetched: false,
			doesGameExistsInDb: true,
		};
	}
	public componentDidMount() {
		requestGameData(this.props.chosenGameId, this.props.dispatch, (gameFound: boolean) => {
			this.setState({ isDataFetched: true, doesGameExistsInDb: gameFound });
		});
	}
	public render() {
		if (this.state.isDataFetched) {
			if (this.state.doesGameExistsInDb) {
				const game = this.props.games.get(this.props.chosenGameId)!;
				const series = this.props.gameSeries.get(game.seriesId)!;
				const image = this.props.images.get(game.imageId ?? -1) || DefaultImage;
				const gameEnvironmentsFilteredList = this.props.gameEnvironemnts.filter(
					(gameEnvironment: GameEnvironment) => gameEnvironment.gameId == game.id
				);
				const chosenGameEnvironments = gameEnvironmentsFilteredList.map(gameEnvironment => {
					return this.props.environemnts.get(gameEnvironment.environmentId)!;
				});
				const gameAbilitiesListProps = createGameAbilitiesListData({
					abilities: this.props.abilities,
					abilityCategories: this.props.abilityCategories,
					abilityExamples: this.props.abilityExamples,
					abilityGroups: this.props.abilityGroups,
					gameId: this.props.chosenGameId,
				});
				return <GameView game={game} series={series} image={image} environments={chosenGameEnvironments} abilityListProps={gameAbilitiesListProps} />;
			} else {
				return <Redirect to="/games" />;
			}
		} else {
			return <></>;
		}
	}
}

const mapStateToProps = (state: AppStore, ownProps: RouteComponentProps<MatchParams>): Partial<GameRouteProps> => {
	return {
		gameEnvironemnts: state.gameEnvironments,
		environemnts: state.environments,
		games: state.games,
		gameSeries: state.gameSeries,
		images: state.images,
		chosenGameId: Number.parseInt(ownProps.match.params.gameId),
		abilityExamples: state.abilityExamples,
		abilities: state.abilities,
		abilityGroups: state.abilityGroups,
		abilityCategories: state.abilityCategories,
	};
};

export default connect(mapStateToProps)(GameRoute);
