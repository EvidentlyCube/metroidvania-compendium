import * as React from 'react';
import { Ability } from '../../storage/models/Ability';
import { AbilityGroup } from '../../storage/models/AbilityGroup';
import { AbilityCategory } from '../../storage/models/AbilityCategory';
import styled from 'styled-components';
import { AbilityListBox } from './AbilityListBox';

const Box = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

interface AbilitiesListProps {
	abilities: Ability[];
	abilityGroups: Map<number, AbilityGroup>;
	abilityCategories: Map<number, AbilityCategory>;
}

export const AbilitiesList: React.FC<AbilitiesListProps> = (props: AbilitiesListProps) => {
	const { abilities, abilityGroups, abilityCategories } = props;
	return (
		<Box>
			{abilities.map(ability => {
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
