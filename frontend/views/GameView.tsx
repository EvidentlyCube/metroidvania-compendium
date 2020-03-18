import * as React from 'react';
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
import { Environment } from '../storage/models/Environment';
import { GameAbilitiesList, GameAbilitiesListProps } from '../components/GameAbilitiesList';

interface GameViewProps {
	game: Game;
	series: GameSeries;
	image: Image;
	environments: Array<Environment>;
	abilityListProps: GameAbilitiesListProps;
}

export class GameView extends React.Component<GameViewProps> {
	render() {
		return (
			<>
				<Narrow>
					<PageHeader>
						<PageTitle>{this.props.game.title}</PageTitle>
						<PageSubtitle>{this.props.series.name}</PageSubtitle>
					</PageHeader>
					<GameBox image={this.props.image} environments={this.props.environments} />
					<PageSection>
						<SectionHeader>Description</SectionHeader>
						<article>{this.props.game.description}</article>
					</PageSection>
					<PageSection>
						<SectionHeader>Analysis</SectionHeader>
						<article>{this.props.game.analysis}</article>
					</PageSection>
					<PageSection>
						<SectionHeader>Abilities (List)</SectionHeader>
						<GameAbilitiesList {...this.props.abilityListProps} />
					</PageSection>
				</Narrow>
			</>
		);
	}
}
