import * as React from 'react';
import { Narrow } from '../components/styles/Narrow';
import { PageHeader } from '../components/styles/PageHeader';
import { PageTitle } from '../components/styles/PageTitle';
import { PageSubtitle } from '../components/styles/PageSubtitle';
import { PageSection } from '../components/styles/PageSection';
import { SearchRow } from '../components/styles/SearchRow';
import GamesList from '../components/GamesList';
import { Link } from 'react-router-dom';

//There has to be some kind of empty props, for constructor and state assigment in definition of Component
interface GamesViewProps {}
interface GameViewState {
	filterString: string;
}
export class GamesView extends React.Component<GamesViewProps, GameViewState> {
	constructor(props: GamesViewProps) {
		super(props);
		this.state = {
			filterString: '',
		};
		this.setGameFilter = this.setGameFilter.bind(this);
	}

	public setGameFilter(filterString: string) {
		this.setState({ filterString });
	}

	public render() {
		return (
			<>
				<Narrow>
					<PageHeader>
						<PageTitle>Games</PageTitle>
						<PageSubtitle>
							Check the <Link to="/config">spoilers options</Link> if you don&apos;t see a game!
						</PageSubtitle>
					</PageHeader>
					<PageSection>
						<p>Find your favorite Metroidvania and learn more about it!</p>
						<SearchRow name="searchedGame" onChange={this.setGameFilter} placeholder="Find a game" />
					</PageSection>
					<GamesList filterString={this.state.filterString} />
				</Narrow>
			</>
		);
	}
}
