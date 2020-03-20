import * as React from 'react';
import { Narrow } from '../components/styles/Narrow';
import { PageHeader } from '../components/styles/PageHeader';
import { PageTitle } from '../components/styles/PageTitle';
import { PageSubtitle } from '../components/styles/PageSubtitle';
import { PageSection } from '../components/styles/PageSection';
import { SectionHeader } from '../components/styles/SectionHeader';
import { AbilityVariantRow } from '../components/listings/AbilityVariantRow';
import { AbilityExamplesTable } from '../components/listings/AbilityExamplesTable';
import { AbilityExampleRow, AbilityExampleRowProps } from '../components/listings/AbilityExampleRow';
import { AbilityVariant } from '../storage/models/AbilityVariant';

interface AbilityViewProps {
	name: string;
	category: string;
	group: string;
	description: string;
	analysis: string;
	abilityVariants: Array<AbilityVariant>;
	abilityExamples: Array<AbilityExampleRowProps>;
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
					<PageSection>
						<SectionHeader>Variants</SectionHeader>
						{this.props.abilityVariants.map(abilityVariant => (
							<AbilityVariantRow key={abilityVariant.id}>{abilityVariant.description}</AbilityVariantRow>
						))}
					</PageSection>
					{/* TODO GameExamples list */}
					<PageSection>
						<SectionHeader>Appearances</SectionHeader>
						<AbilityExamplesTable>
							{this.props.abilityExamples.map(abilityExample => (
								<AbilityExampleRow key={abilityExample.id} {...abilityExample} />
							))}
						</AbilityExamplesTable>
					</PageSection>
				</Narrow>
			</>
		);
	}
}
