import * as React from 'react';
import { BreadcrumbActions, AppStore } from '../storage/common';
import { Image } from '../storage/models/Image';
import { RouteComponentProps, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';
import { AbilityExample } from '../storage/models/AbilityExample';
import { Ability } from '../storage/models/Ability';
import { AbilityGroup } from '../storage/models/AbilityGroup';
import { AbilityCategory } from '../storage/models/AbilityCategory';
import { AbilityView } from '../views/AbilityView';
import { AbilityVariant } from '../storage/models/AbilityVariant';
import { createAbilitiesExampleListData } from '../storage/utils/createAbilitiesExampleLIstData';
import { Game } from '../storage/models/Game';

interface AbilityRouteProps {
	games: Map<number, Game>;
	images: Map<number, Image>;
	abilityExamples: Array<AbilityExample>;
	abilityVariants: Array<AbilityVariant>;
	abilities: Map<number, Ability>;
	abilityGroups: Map<number, AbilityGroup>;
	abilityCategories: Map<number, AbilityCategory>;
	chosenAbilityId: number;
	dispatch: Dispatch<AnyAction>;
}
interface MatchParams {
	abilityId: string;
}
export class AbilityRoute extends React.Component<AbilityRouteProps> {
	abilityExists: boolean;
	constructor(props: AbilityRouteProps) {
		super(props);
		if (props.abilities.has(props.chosenAbilityId)) {
			this.abilityExists = true;
		} else {
			this.abilityExists = false;
		}
	}
	public componentDidMount() {
		if (this.abilityExists) {
			this.props.dispatch(BreadcrumbActions.setBreadcrumb(this.props.abilities.get(this.props.chosenAbilityId)!.name));
		}
	}
	public render() {
		if (this.abilityExists) {
			const { abilities, abilityGroups, abilityCategories, chosenAbilityId, abilityVariants, abilityExamples, games, images } = this.props;
			const ability = abilities.get(chosenAbilityId)!;
			const abilityGroup = abilityGroups.get(ability.groupId)!;
			const abilityCategory = abilityCategories.get(abilityGroup.categoryId)!;
			const filteredAbilityVariants = abilityVariants.filter(abilityVariant => abilityVariant.abilityId === chosenAbilityId);
			const abilityExamplesData = createAbilitiesExampleListData({ abilityExamples, games, images, abilityId: chosenAbilityId });
			return (
				<AbilityView
					name={ability.name}
					description={ability.description}
					analysis={ability.analysis}
					category={abilityCategory.name}
					group={abilityGroup.name}
					abilityVariants={filteredAbilityVariants}
					abilityExamples={abilityExamplesData}
				/>
			);
		} else {
			return <Redirect to="/home" />;
		}
	}
}
const mapStateToProps = (state: AppStore, ownProps: RouteComponentProps<MatchParams>): Partial<AbilityRouteProps> => {
	return {
		images: state.images,
		chosenAbilityId: Number.parseInt(ownProps.match.params.abilityId),
		abilityExamples: state.abilityExamples,
		abilities: state.abilities,
		abilityGroups: state.abilityGroups,
		abilityCategories: state.abilityCategories,
		abilityVariants: state.abilityVariants,
		games: state.games,
	};
};

export default connect(mapStateToProps)(AbilityRoute);
