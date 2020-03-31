import * as React from 'react';
import { AbilityCategory } from '../../storage/models/AbilityCategory';
import { GameAbilityTable } from './GameAbilityTable';
import { GameAbilityRowSeparator } from './GameAbilityRowSeparator';
import { GameAbilityRow, GameAbilityRowProps } from './GameAbilityRow';

export interface GameAbilitiesListProps {
	abilities: Map<number, Array<GameAbilityRowProps>>;
	categories: Array<AbilityCategory>;
}

export const GameAbilitiesList: React.FC<GameAbilitiesListProps> = (props: GameAbilitiesListProps) => {
	return (
		<>
			<GameAbilityTable>
				{props.categories.map(abilityCategory => {
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
