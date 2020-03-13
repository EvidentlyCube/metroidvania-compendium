export type AbilityGroupProps = Required<AbilityGroup>;
export class AbilityGroup {
	public readonly id: number;
	public readonly categoryId: number;
	public readonly name: string;

	public readonly description: string;

	constructor(props: AbilityGroupProps) {
		this.id = props.id;
		this.categoryId = props.categoryId;
		this.name = props.name;
		this.description = props.description;
	}
}
