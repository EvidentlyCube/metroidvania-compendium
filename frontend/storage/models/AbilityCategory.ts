export type AbilityCategoryProps = Required<AbilityCategory>;
export class AbilityCategory {
	public readonly id: number;

	public readonly name: string;

	public readonly description: string;

	constructor(props: AbilityCategoryProps) {
		this.id = props.id;
		this.name = props.name;
		this.description = props.description;
	}
}
