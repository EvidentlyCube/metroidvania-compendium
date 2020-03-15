import * as React from 'react';
import { connect } from 'react-redux';
import { AppStore } from '../storage/common';
import { Game } from '../storage/models/Game';
import { GameSeries } from '../storage/models/GameSeries';
import { Image, DefaultImage } from '../storage/models/Image';
import { Narrow } from '../components/styles/Narrow';
import { PageHeader } from '../components/styles/PageHeader';
import { PageTitle } from '../components/styles/PageTitle';
import { PageSubtitle } from '../components/styles/PageSubtitle';
import { PageSection } from '../components/styles/PageSection';
import { SectionHeader } from '../components/styles/SectionHeader';
import { GameBox } from '../components/GameBox';
import { RouteComponentProps, Redirect } from 'react-router-dom';

interface MatchParams {
	gameId: string;
}
interface GameDetailevViewProps {
	games: Map<number, Game>;
	gameSeries: Map<number, GameSeries>;
	images: Map<number, Image>;
	chosenGameId: number;
}
interface GameDetailedViewState {
	chosenGame: Game;
}

export class GameDetailedView extends React.Component<GameDetailevViewProps, GameDetailedViewState> {
	gameFound: boolean;
	chosenSeries: GameSeries;
	chosenImage: Image;
	constructor(props: GameDetailevViewProps) {
		super(props);
		if (props.games.has(props.chosenGameId)) {
			this.gameFound = true;
			this.state = {
				chosenGame: props.games.get(props.chosenGameId)!,
			};
			this.chosenSeries = props.gameSeries.get(this.state.chosenGame.seriesId)!;
			if (!this.chosenSeries) {
				throw new ReferenceError(
					`Game with id: ${props.chosenGameId} have a missing game series associated with it. Game Series Id:${this.state.chosenGame.seriesId}`
				);
			}
			this.chosenImage = props.images.get(this.state.chosenGame.imageId) || DefaultImage;
		} else {
			this.gameFound = false;
		}
	}
	render() {
		if (this.gameFound) {
			return (
				<>
					<Narrow>
						<PageHeader>
							<PageTitle>{this.state.chosenGame.title}</PageTitle>
							<PageSubtitle>{this.chosenSeries.name}</PageSubtitle>
						</PageHeader>
						{/*TODO: Parametrised GameBox, to show image etc. */}
						<GameBox />
						<PageSection>
							<SectionHeader>Description</SectionHeader>
							<article>{this.state.chosenGame.description}</article>
						</PageSection>
						<PageSection>
							<SectionHeader>Analysis</SectionHeader>
							<article>{this.state.chosenGame.analysis}</article>
						</PageSection>
						<PageSection>
							<SectionHeader>Abilities (List)</SectionHeader>
							{/* TODO: Abilities List */}
						</PageSection>
					</Narrow>
				</>
			);
		} else {
			return <Redirect to="/games" />;
		}
	}
}

const mapStateToProps = (state: AppStore, ownProps: RouteComponentProps<MatchParams>): GameDetailevViewProps => {
	return {
		games: state.games,
		gameSeries: state.gameSeries,
		images: state.images,
		chosenGameId: Number.parseInt(ownProps.match.params.gameId),
	};
};

export default connect(mapStateToProps)(GameDetailedView);
