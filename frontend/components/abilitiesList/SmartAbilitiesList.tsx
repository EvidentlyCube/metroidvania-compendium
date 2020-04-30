import * as React from 'react';
import { FetchHelperFunctions } from '../../storage/utils/fetchHelperFunctions';
import { Ability } from '../../storage/models/Ability';
import { AbilityGroup } from '../../storage/models/AbilityGroup';
import { AbilityCategory } from '../../storage/models/AbilityCategory';
import { FetchAbilities } from '../../storage/utils/fetchAbilitiesData';
import { AbilitiesList } from './AbilitiesList';

interface SmartAbilitiesListState {
	isDataAvailable: boolean;
	abilities: Ability[];
	abilityGroups: Map<number, AbilityGroup>;
	abilityCategories: Map<number, AbilityCategory>;
}

interface SmartAbilitiesListProps {
	filterString: string;
}

export class SmartAbilitiesList extends React.Component<SmartAbilitiesListProps, SmartAbilitiesListState> {
	constructor(props: SmartAbilitiesListProps) {
		super(props);
		this.state = {
			isDataAvailable: false,
			abilities: [],
			abilityGroups: new Map(),
			abilityCategories: new Map(),
		};
	}
	public async componentDidMount() {
		try {
			const abilities = await FetchAbilities.lookupAbilities();
			const abilityGroups = await FetchAbilities.lookupAbilityGroupsByIds(FetchHelperFunctions.getUniqueValues(abilities, 'groupId'));
			const abilityCategories = await FetchAbilities.lookupAbilityCategoriesByIds(FetchHelperFunctions.getUniqueValues(abilityGroups, 'categoryId'));
			this.setState({
				abilities,
				abilityGroups: FetchHelperFunctions.mapValues(abilityGroups, 'id'),
				abilityCategories: FetchHelperFunctions.mapValues(abilityCategories, 'id'),
				isDataAvailable: true,
			});
		} catch (error) {
			console.log(error);
			this.setState({ isDataAvailable: false });
		}
	}
	public render() {
		if (this.state.isDataAvailable) {
			const filiteredAbilities = this.state.abilities.filter((ability: Ability) => ability.name.startsWith(this.props.filterString));
			return <AbilitiesList abilities={filiteredAbilities} abilityCategories={this.state.abilityCategories} abilityGroups={this.state.abilityGroups} />;
		} else {
			return <></>;
		}
	}
}
