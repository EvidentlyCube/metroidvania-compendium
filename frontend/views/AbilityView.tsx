import * as React from 'react';
import { Narrow } from '../components/styles/Narrow';
import { PageHeader } from '../components/styles/PageHeader';
import { PageTitle } from '../components/styles/PageTitle';
import { PageSubtitle } from '../components/styles/PageSubtitle';
import { PageSection } from '../components/styles/PageSection';
import { SectionHeader } from '../components/styles/SectionHeader';
import { AbilityVariantRow } from '../components/listings/AbilityVariantRow';
import { AbilityExamplesTable } from '../components/listings/AbilityExamplesTable';
import { AbilityExampleRow } from '../components/listings/AbilityExampleRow';

interface AbilityViewProps {
	name: string;
	category: string;
	group: string;
	description: string;
	analysis: string;
}

export class AbilityView extends React.Component<AbilityViewProps> {
	render() {
		return (
			<>
				<Narrow>
					<PageHeader>
						<PageTitle>{this.props.name}</PageTitle>
						<PageSubtitle>
							{this.props.category} » {this.props.group}
						</PageSubtitle>
					</PageHeader>
					<PageSection>
						<SectionHeader>Description</SectionHeader>
						<article>
							<p>{this.props.description}</p>
						</article>
						<SectionHeader>Analysis</SectionHeader>
						<article>
							<p>{this.props.analysis}</p>
						</article>
					</PageSection>
					{/* TODO: Variant list */}
					<PageSection>
						<SectionHeader>Variants</SectionHeader>
						<AbilityVariantRow>May be used in top-down games as a time-to-time or regular mechanic for added gameplay.</AbilityVariantRow>
						<AbilityVariantRow>May be used in non-action games (like RPGs or 3/4 perspective games).</AbilityVariantRow>
						<AbilityVariantRow>May be an ability that needs to be collected by the protagonist.</AbilityVariantRow>
						<AbilityVariantRow>May be used in top-down games as a time-to-time or regular mechanic for added gameplay.</AbilityVariantRow>
						<AbilityVariantRow>May be used in non-action games (like RPGs or 3/4 perspective games).</AbilityVariantRow>
						<AbilityVariantRow>May be an ability that needs to be collected by the protagonist.</AbilityVariantRow>
						<AbilityVariantRow>May be used in top-down games as a time-to-time or regular mechanic for added gameplay.</AbilityVariantRow>
						<AbilityVariantRow>May be used in non-action games (like RPGs or 3/4 perspective games).</AbilityVariantRow>
						<AbilityVariantRow>May be an ability that needs to be collected by the protagonist.</AbilityVariantRow>
						<AbilityVariantRow>May be used in top-down games as a time-to-time or regular mechanic for added gameplay.</AbilityVariantRow>
						<AbilityVariantRow>May be used in non-action games (like RPGs or 3/4 perspective games).</AbilityVariantRow>
						<AbilityVariantRow>May be an ability that needs to be collected by the protagonist.</AbilityVariantRow>
					</PageSection>
					{/* TODO GameExamples list */}
					<PageSection>
						<SectionHeader>Appearances</SectionHeader>
						<AbilityExamplesTable>
							<AbilityExampleRow />
							<AbilityExampleRow />
							<AbilityExampleRow />
							<AbilityExampleRow />
							<AbilityExampleRow />
							<AbilityExampleRow />
							<AbilityExampleRow />
						</AbilityExamplesTable>
					</PageSection>
				</Narrow>
			</>
		);
	}
}
