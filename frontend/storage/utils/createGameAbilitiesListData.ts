import { AbilityExample } from '../models/AbilityExample';
import { Ability } from '../models/Ability';
import { AbilityGroup } from '../models/AbilityGroup';
import { AbilityCategory } from '../models/AbilityCategory';
import { GameAbilitiesListProps } from '../../components/gameAbilitiesList/GameAbilitiesList';

interface GameAbilitiesListInitialProps {
	abilityExamples: AbilityExample[];
	abilities: Map<number, Ability>;
	abilityGroups: Map<number, AbilityGroup>;
	abilityCategories: Map<number, AbilityCategory>;
}
export function createGameAbilitiesListData(props: GameAbilitiesListInitialProps): GameAbilitiesListProps {
	const { abilities, abilityExamples, abilityGroups, abilityCategories } = props;
	const gameAbilitiesListData: GameAbilitiesListProps = { abilities: new Map(), categories: [] };
	for (const abilityExample of abilityExamples) {
		const ability = abilities.get(abilityExample.abilityId)!;
		const group = abilityGroups.get(ability.groupId)!;
		const category = abilityCategories.get(group.categoryId)!;
		if (!gameAbilitiesListData.abilities.has(category.id)) {
			gameAbilitiesListData.abilities.set(category.id, []);
			gameAbilitiesListData.categories.push(category);
		}
		gameAbilitiesListData.abilities.get(category.id)!.push({
			abilityId: ability.id,
			abilityName: ability.name,
			description: abilityExample.description,
			exampleId: abilityExample.id,
			exampleName: abilityExample.name,
		});
	}
	return gameAbilitiesListData;
}
