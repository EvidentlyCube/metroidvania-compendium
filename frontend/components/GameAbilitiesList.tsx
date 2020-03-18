import * as React from 'react';
import { AbilityCategory } from '../storage/models/AbilityCategory';
import { GameAbilityTable } from './listings/GameAbilityTable';
import { GameAbilityRowSeparator } from './listings/GameAbilityRowSeparator';
import { GameAbilityRow, GameAbilityRowProps } from './listings/GameAbilityRow';

export interface GameAbilitiesListProps {
	abilities: Map<number, Array<GameAbilityRowProps>>;
	categories: Array<AbilityCategory>;
}

export const GameAbilitiesList: React.FC<GameAbilitiesListProps> = (props: GameAbilitiesListProps) => {
	return (
		<>
			<GameAbilityTable>
				{props.categories.map((abilityCategory: AbilityCategory) => {
					const abilityRowPropsArray = props.abilities.get(abilityCategory.id)!;
					return (
						<>
							<GameAbilityRowSeparator>{abilityCategory.name}</GameAbilityRowSeparator>
							{abilityRowPropsArray.map((abilityRowProps: GameAbilityRowProps) => {
								return <GameAbilityRow key={abilityRowProps.exampleId} {...abilityRowProps} />;
							})}
						</>
					);
				})}
			</GameAbilityTable>
		</>
	);
};
