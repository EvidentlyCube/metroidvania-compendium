import * as React from 'react';
import { BreadcrumbActions, AppStore } from '../storage/common';
import { RouteComponentProps, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';
import { AbilityView, AbilityViewProps } from '../views/AbilityView';
import { createAbilitiesExampleListData } from '../storage/utils/createAbilitiesExampleLIstData';
import { FetchAbilities } from '../storage/utils/fetchAbilitiesData';
import { FetchGame } from '../storage/utils/fetchGameData';
import { FetchHelperFunctions } from '../storage/utils/fetchHelperFunctions';

interface AbilityRouteState {
	abilityViewProps: AbilityViewProps | null;
	isDataFetched: boolean;
	doesAbilityExistsInDb: boolean;
}
interface AbilityRouteProps {
	chosenAbilityId: number;
	dispatch: Dispatch<AnyAction>;
}
interface MatchParams {
	abilityId: string;
}
export class AbilityRoute extends React.Component<AbilityRouteProps, AbilityRouteState> {
	abilityExists: boolean;
	constructor(props: AbilityRouteProps) {
		super(props);
		this.state = {
			isDataFetched: false,
			doesAbilityExistsInDb: true,
			abilityViewProps: null,
		};
	}
	public async componentDidMount() {
		try {
			const ability = await FetchAbilities.findAbilityById(this.props.chosenAbilityId);
			console.log(ability);
			const abilityGroup = await FetchAbilities.findAbilityGroupById(ability.id);
			const abilityExamples = await FetchAbilities.lookupAbilityExamplesByAbilityId(ability.id);
			const abilityCategory = await FetchAbilities.findAbilityCategoryById(abilityGroup.categoryId);
			const abilityVariants = await FetchAbilities.lookupAbilityVariantsById(this.props.chosenAbilityId);
			const games = FetchHelperFunctions.mapValues(await FetchGame.lookupGames(), 'id');
			const images = FetchHelperFunctions.mapValues(await FetchGame.lookupImages(), 'id');
			const abilityExampleData = createAbilitiesExampleListData({ abilityExamples, games, images });
			this.props.dispatch(BreadcrumbActions.setBreadcrumb(ability.name));
			this.setState({
				abilityViewProps: {
					name: ability.name,
					category: abilityCategory.name,
					group: abilityGroup.name,
					description: ability.description,
					analysis: ability.analysis,
					abilityExamples: abilityExampleData,
					abilityVariants: abilityVariants,
				},
				doesAbilityExistsInDb: true,
				isDataFetched: true,
			});
		} catch (error) {
			console.log(error);
			this.setState({ doesAbilityExistsInDb: false, isDataFetched: true });
		}
	}
	public render() {
		if (this.state.isDataFetched) {
			if (this.state.doesAbilityExistsInDb) {
				return <AbilityView {...this.state.abilityViewProps!} />;
			} else {
				return <Redirect to="/abilities" />;
			}
		} else {
			return <></>;
		}
	}
}
const mapStateToProps = (state: AppStore, ownProps: RouteComponentProps<MatchParams>): Partial<AbilityRouteProps> => {
	return {
		chosenAbilityId: Number.parseInt(ownProps.match.params.abilityId),
	};
};

export default connect(mapStateToProps)(AbilityRoute);
