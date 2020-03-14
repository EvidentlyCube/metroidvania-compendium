import * as React from 'react';
import { connect } from 'react-redux';
import { AppStore } from '../storage/common';
import { Game } from '../storage/models/Game';
import { GameSeries } from '../storage/models/GameSeries';
import { Image } from '../storage/models/Image';
import { Narrow } from '../components/styles/Narrow';
import { PageHeader } from '../components/styles/PageHeader';
import { PageTitle } from '../components/styles/PageTitle';
import { PageSubtitle } from '../components/styles/PageSubtitle';
import { PageSection } from '../components/styles/PageSection';
import { SectionHeader } from '../components/styles/SectionHeader';
import { GameBox } from '../components/GameBox';
import { RouteComponentProps } from 'react-router-dom';

interface MatchParams {
	chosenGame: string;
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
	chosenSeries: GameSeries;
	chosenImage: Image;
	constructor(props: GameDetailevViewProps) {
		super(props);
		this.state = {
			chosenGame:
				props.games.get(props.chosenGameId) ||
				new Game({ title: 'Undefined', id: -1, seriesId: -1, imageId: -1, description: 'undefined', analysis: 'undefined' }),
		};
		this.chosenSeries =
			props.gameSeries.get(this.state.chosenGame.seriesId) ||
			new GameSeries({ id: -1, name: 'undefined', description: 'undefined', wikiUrl: 'undefined' });
		this.chosenImage = props.images.get(this.state.chosenGame.imageId) || new Image({ id: -1, name: 'undefined', fileUrl: 'undefined' });
	}
	render() {
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
	}
}

const mapStateToProps = (state: AppStore, ownProps: RouteComponentProps<MatchParams>): GameDetailevViewProps => {
	return {
		games: state.games,
		gameSeries: state.gameSeries,
		images: state.images,
		chosenGameId: Number.parseInt(ownProps.match.params.chosenGame),
	};
};

export default connect(mapStateToProps)(GameDetailedView);
