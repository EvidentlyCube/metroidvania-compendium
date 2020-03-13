export type EnvironmentProps = Required<Environment>;
export class Environment {
	public readonly id: number;

	public readonly wikiUrl: string;

	public readonly name: string;

	public readonly description: string;

	constructor(props: EnvironmentProps) {
		this.id = props.id;
		this.name = props.name;
		this.wikiUrl = props.wikiUrl;
		this.description = props.description;
	}
}
