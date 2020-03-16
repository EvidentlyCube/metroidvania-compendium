import * as React from 'react';
import GamesVisibilityList from '../components/GamesVisibilityList';
import styled from 'styled-components';
import { Theme } from '../components/styles/themes';
import { Narrow } from '../components/styles/Narrow';
import { PageHeader } from '../components/styles/PageHeader';
import { PageSection } from '../components/styles/PageSection';
import { SectionHeader } from '../components/styles/SectionHeader';
import { SearchRow } from '../components/styles/SearchRow';
import { PageTitle } from '../components/styles/PageTitle';
import { PageSubtitle } from '../components/styles/PageSubtitle';

const Buttons = styled.div`
	display: flex;
	margin-bottom: 20px;
`;

const Button = styled.div`
	font-size: 24px;
	flex-grow: 1;
	cursor: pointer;
	text-align: center;
	background: ${Theme.colorAccentBg};
	padding: 20px;
	&:hover {
		background: ${Theme.colorAccentDarkBg};
	}
`;

const Controls = styled.div`
	margin-bottom: 20px;
`;

interface ConfigViewProps {
	buttonAction: (allVisibile: boolean) => void;
}
interface ConfigViewState {
	filterString: string;
}
export class ConfigView extends React.Component<ConfigViewProps, ConfigViewState> {
	constructor(props: ConfigViewProps) {
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
			<Narrow>
				<PageHeader>
					<PageTitle>Configuration</PageTitle>
					<PageSubtitle>Customize your experience</PageSubtitle>
				</PageHeader>
				<PageSection>
					<SectionHeader>Visible games</SectionHeader>
					<article>
						<p>There are a lot of spoilers in here for games you may not have played. Please select the games which youd like to see.</p>
					</article>
					<Controls>
						<Buttons>
							<Button onClick={() => this.props.buttonAction(true)}>Select All</Button>
							<Button onClick={() => this.props.buttonAction(false)}>Unselect All</Button>
						</Buttons>
						<SearchRow name="searchedGame" onChange={this.setGameFilter} placeholder="Find a game" />
					</Controls>
					<GamesVisibilityList filterString={this.state.filterString} />
				</PageSection>
			</Narrow>
		);
	}
}
