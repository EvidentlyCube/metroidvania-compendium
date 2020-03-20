import * as React from 'react';
import { connect } from 'react-redux';
import { AppStore } from '../storage/common';
import { Ability } from '../storage/models/Ability';
import { AbilityGroup } from '../storage/models/AbilityGroup';
import { AbilityCategory } from '../storage/models/AbilityCategory';
import styled from 'styled-components';
import { AbilityListBox } from './listings/AbilityListBox';

const Box = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;
interface AbilitiesFilterProps {
	filterString: string;
}
interface AbilitiesListProps extends AbilitiesFilterProps {
	abilities: Array<Ability>;
	abilityGroups: Map<number, AbilityGroup>;
	abilityCategories: Map<number, AbilityCategory>;
}

const AbilitiesList: React.FC<AbilitiesListProps> = (props: AbilitiesListProps) => {
	const { abilities, abilityGroups, abilityCategories } = props;
	const filteredAbilities = abilities.filter(ability => ability.name.startsWith(props.filterString));
	return (
		<Box>
			{filteredAbilities.map(ability => {
				const group = abilityGroups.get(ability.groupId)!;
				const category = abilityCategories.get(group.categoryId)!;
				return (
					<AbilityListBox
						key={ability.id}
						id={ability.id}
						name={ability.name}
						group={group.name}
						category={category.name}
						description={ability.description}
					/>
				);
			})}
		</Box>
	);
};

const mapStateToProps = (state: AppStore, ownProps: AbilitiesFilterProps): AbilitiesListProps => {
	return {
		abilities: Array.from(state.abilities.values()),
		abilityCategories: state.abilityCategories,
		abilityGroups: state.abilityGroups,
		filterString: ownProps.filterString,
	};
};

export default connect(mapStateToProps)(AbilitiesList);
