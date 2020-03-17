import * as React from 'react';
import { connect } from 'react-redux';
import { AppStore } from '../storage/common';
import { AbilityExample } from '../storage/models/AbilityExample';
import { Ability } from '../storage/models/Ability';
import { AbilityGroup } from '../storage/models/AbilityGroup';
import { AbilityCategory } from '../storage/models/AbilityCategory';
import { GameAbilityTable } from './listings/GameAbilityTable';
import { GameAbilityRowSeparator } from './listings/GameAbilityRowSeparator';
import { GameAbilityRow } from './listings/GameAbilityRow';
interface ChosenGameProps {
	gameId: number;
}
interface GameAbilitiesListProps extends ChosenGameProps {
	abilityExamples: Array<AbilityExample>;
	abilities: Map<number, Ability>;
	abilityGroups: Array<AbilityGroup>;
	abilityCategories: Array<AbilityCategory>;
}

const GamesVisibilityList: React.FC<GameAbilitiesListProps> = (props: GameAbilitiesListProps) => {
	const abilityExamplesThisGame = props.abilityExamples.filter((abilityExample: AbilityExample) => {
		return abilityExample.gameId == props.gameId;
	});
	return (
		<>
			<GameAbilityTable>
				{props.abilityCategories.map((abilityCategory: AbilityCategory) => {
					const abilityGroupsFilteredArray = props.abilityGroups.filter((abilityGroup: AbilityGroup) => {
						return abilityGroup.categoryId == abilityCategory.id;
					});
					const abilityGroupsFilteredMap = new Map();
					for (const abilityGroup of abilityGroupsFilteredArray) {
						abilityGroupsFilteredMap.set(abilityGroup.id, abilityGroup);
					}
					return (
						<>
							<GameAbilityRowSeparator>{abilityCategory.name}</GameAbilityRowSeparator>
							{abilityExamplesThisGame.map((abilityExample: AbilityExample) => {
								const ability = props.abilities.get(abilityExample.abilityId);
								if (abilityGroupsFilteredMap.has(ability?.groupId)) {
									return (
										<GameAbilityRow
											abilityId={ability!.id}
											abilityName={ability!.name}
											exampleName={abilityExample.name}
											description={abilityExample.description}
										/>
									);
								}
							})}
						</>
					);
				})}
			</GameAbilityTable>
		</>
	);
};

const mapStateToProps = (state: AppStore, ownProps: ChosenGameProps): GameAbilitiesListProps => {
	return {
		abilityExamples: state.abilityExamples,
		abilities: state.abilities,
		abilityGroups: Array.from(state.abilityGroups.values()),
		abilityCategories: Array.from(state.abilityCategories.values()),
		gameId: ownProps.gameId,
	};
};

export default connect(mapStateToProps)(GamesVisibilityList);
