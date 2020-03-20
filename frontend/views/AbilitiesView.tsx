import * as React from 'react';
import { Narrow } from '../components/styles/Narrow';
import { PageHeader } from '../components/styles/PageHeader';
import { PageTitle } from '../components/styles/PageTitle';
import { PageSubtitle } from '../components/styles/PageSubtitle';
import { PageSection } from '../components/styles/PageSection';
import { SearchRow } from '../components/styles/SearchRow';
import AbilitiesList from '../components/AbilitiesList';

interface AbilitiesViewState {
	filterString: string;
}
export class AbilitiesView extends React.Component<{}, AbilitiesViewState> {
	constructor(props: {}) {
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
						<PageTitle>Abilities</PageTitle>
						<PageSubtitle>Powerups, skills, upgrades</PageSubtitle>
					</PageHeader>

					<PageSection>
						<p>
							Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
							ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat
							eleifend leo.
						</p>
						<p>
							Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
							ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat
							eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit
							amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non
							enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate
							magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus
						</p>
						<p>
							Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
							ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat
							eleifend leo.
						</p>
						<SearchRow name="searchedGame" onChange={this.setGameFilter} placeholder="Find an ability" />
					</PageSection>
					<AbilitiesList filterString={this.state.filterString} />
				</Narrow>
			</>
		);
	}
}
