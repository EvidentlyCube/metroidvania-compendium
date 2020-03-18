import { AbilityExample } from '../models/AbilityExample';
import { Ability } from '../models/Ability';
import { AbilityGroup } from '../models/AbilityGroup';
import { AbilityCategory } from '../models/AbilityCategory';
import { GameAbilitiesListProps } from '../../components/GameAbilitiesList';

interface GameAbilitiesListInitialProps {
	abilityExamples: Array<AbilityExample>;
	abilities: Map<number, Ability>;
	abilityGroups: Map<number, AbilityGroup>;
	abilityCategories: Map<number, AbilityCategory>;
	gameId: number;
}
export function createGameAbilitiesListData(props: GameAbilitiesListInitialProps): GameAbilitiesListProps {
	const { abilities, abilityExamples, abilityGroups, abilityCategories, gameId } = props;
	const gameAbilitiesListData: GameAbilitiesListProps = { abilities: new Map(), categories: [] };
	const abilityExamplesThisGame = abilityExamples.filter(abilityExample => abilityExample.gameId === gameId);
	for (const abilityExample of abilityExamplesThisGame) {
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
			description: ability.description,
			exampleId: abilityExample.id,
			exampleName: abilityExample.name,
		});
	}
	return gameAbilitiesListData;
}
