export type AbilityExampleProps = Required<AbilityExample>;
export class AbilityExample {
	public readonly id: number;

	public readonly abilityId: number;

	public readonly gameId: number;

	public readonly name: string;

	public readonly description: string;

	constructor(props: AbilityExampleProps) {
		this.id = props.id;
		this.name = props.name;
		this.description = props.description;
		this.gameId = props.gameId;
		this.abilityId = props.abilityId;
	}
}
