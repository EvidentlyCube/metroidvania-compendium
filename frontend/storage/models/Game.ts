export type GameProps = Required<Game>;
export class Game {
	public readonly id: number;

	public readonly name: string;

	constructor(props: GameProps) {
		this.id = props.id;
		this.name = props.name;
	}
}
