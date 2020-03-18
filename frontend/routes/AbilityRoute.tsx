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

interface AbilityRouteProps {
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
			const { abilities, abilityGroups, abilityCategories, chosenAbilityId, abilityVariants } = this.props;
			const ability = abilities.get(chosenAbilityId)!;
			const abilityGroup = abilityGroups.get(ability.groupId)!;
			const abilityCategory = abilityCategories.get(abilityGroup.categoryId)!;
			const filteredAbilityVariants = abilityVariants.filter(abilityVariant => abilityVariant.abilityId === chosenAbilityId);
			return (
				<AbilityView
					name={ability.name}
					description={ability.description}
					analysis={ability.analysis}
					category={abilityCategory.name}
					group={abilityGroup.name}
					abilityVariants={filteredAbilityVariants}
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
	};
};

export default connect(mapStateToProps)(AbilityRoute);
