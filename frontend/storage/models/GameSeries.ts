export type GameSeriesProps = Required<GameSeries>;
export class GameSeries {
	public readonly id: number;

	public readonly name: string;

	public readonly description: string;

	public readonly wikiUrl: string;

	constructor(props: GameSeriesProps) {
		this.id = props.id;
		this.name = props.name;
		this.description = props.description;
		this.wikiUrl = props.wikiUrl;
	}
}
