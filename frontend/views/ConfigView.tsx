import * as React from 'react';
import { Store } from 'redux';
import { AppStore, AppActions, BreadcrumbActions } from '../storage/common';
import GamesVisibilityList from '../components/GamesVisibilityList';
import styled from 'styled-components';
import { Theme } from '../components/styles/themes';
import { Narrow } from '../components/styles/Narrow';
import { PageHeader } from '../components/styles/PageHeader';
import { PageSection } from '../components/styles/PageSection';
import { SectionHeader } from '../components/styles/SectionHeader';
import { SearchRow } from '../components/styles/SearchRow';

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
const Box = styled.div`
	padding-top: ${Theme.headerHeight};
`;

const Controls = styled.div`
	margin-bottom: 20px;
`;

interface ConfigViewProps {
	store: Store<AppStore, AppActions>;
}

export class ConfigView extends React.Component<ConfigViewProps> {
	public componentDidMount() {
		this.props.store.dispatch(BreadcrumbActions.setBreadcrumb('Config'));
	}

	public render(): React.ReactNode {
		return (
			<Box>
				<Narrow>
					<PageHeader>
						<h1>Configuration</h1>
						<h2>Customize your experience</h2>
					</PageHeader>
					<PageSection>
						<SectionHeader>Visible games</SectionHeader>
						<article>
							<p>There are a lot of spoilers in here for games you may not have played. Please select the games which youd like to see.</p>
						</article>
						<Controls>
							<Buttons>
								<Button>Select All</Button>
								<Button>Unselect All</Button>
							</Buttons>
							<form action="#" method="post">
								<SearchRow name="searchedGame" placeholder="Find a game" />
							</form>
						</Controls>
						<GamesVisibilityList />
					</PageSection>
				</Narrow>
			</Box>
		);
	}
}
