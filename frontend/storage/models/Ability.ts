export type AbilityProps = Required<Ability>;
export class Ability {
	public readonly id: number;

	public readonly groupId: number;

	public readonly name: string;

	public readonly description: string;

	constructor(props: AbilityProps) {
		this.id = props.id;
		this.name = props.name;
		this.groupId = props.groupId;
		this.description = props.description;
	}
}
