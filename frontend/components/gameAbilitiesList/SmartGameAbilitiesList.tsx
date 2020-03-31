import * as React from 'react';
import { GameAbilitiesListProps, GameAbilitiesList } from './GameAbilitiesList';
import { FetchAbilities } from '../../storage/utils/fetchAbilitiesData';
import { FetchHelperFunctions } from '../../storage/utils/fetchHelperFunctions';
import { createGameAbilitiesListData } from '../../storage/utils/createGameAbilitiesListData';

interface SmartGameAbilitiesListState {
	isDataAvailable: boolean;
	gameAbilitiesListProps: GameAbilitiesListProps | null;
}

interface SmartGameAbilitiesListProps {
	gameId: number;
}

export class SmartGameAbilitiesList extends React.Component<SmartGameAbilitiesListProps, SmartGameAbilitiesListState> {
	constructor(props: SmartGameAbilitiesListProps) {
		super(props);
		this.state = {
			isDataAvailable: false,
			gameAbilitiesListProps: null,
		};
	}
	public async componentDidMount() {
		try {
			const abilityExamples = await FetchAbilities.lookupAbilityExamplesByGameId(this.props.gameId);
			const abilities = await FetchAbilities.lookupAbilitiesByIds(FetchHelperFunctions.getUniqueValues(abilityExamples, 'abilityId'));
			const abilityGroups = await FetchAbilities.lookupAbilityGroupsByIds(FetchHelperFunctions.getUniqueValues(abilities, 'groupId'));
			const abilityCategories = await FetchAbilities.lookupAbilityCategoriesByIds(FetchHelperFunctions.getUniqueValues(abilityGroups, 'categoryId'));
			const gameAbilitiesListProps = createGameAbilitiesListData({
				abilityExamples,
				abilities: FetchHelperFunctions.mapValues(abilities, 'id'),
				abilityGroups: FetchHelperFunctions.mapValues(abilityGroups, 'id'),
				abilityCategories: FetchHelperFunctions.mapValues(abilityCategories, 'id'),
			});
			this.setState({ gameAbilitiesListProps, isDataAvailable: true });
		} catch (error) {
			console.log(error);
			this.setState({ isDataAvailable: false });
		}
	}
	public render() {
		if (this.state.isDataAvailable) {
			return <GameAbilitiesList {...this.state.gameAbilitiesListProps!} />;
		} else {
			return <></>;
		}
	}
}
