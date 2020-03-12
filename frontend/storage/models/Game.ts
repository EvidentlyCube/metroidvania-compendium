export type GameProps = Required<Game>;
export class Game {
	public readonly id: number;

	public readonly name: string;

	public readonly series: string;

	public readonly img: any;

	constructor(props: GameProps) {
		this.id = props.id;
		this.name = props.name;
		this.series = props.series;
		this.img = props.img;
	}
}
