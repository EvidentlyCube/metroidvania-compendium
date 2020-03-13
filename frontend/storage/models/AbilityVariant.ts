export type AbilityVariantProps = Required<AbilityVariant>;
export class AbilityVariant {
	public readonly id: number;

	public readonly abilityId: number;

	public readonly description: string;

	constructor(props: AbilityVariantProps) {
		this.id = props.id;
		this.abilityId = props.abilityId;
		this.description = props.description;
	}
}
