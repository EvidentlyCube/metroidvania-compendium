export type GameProps = Required<Game>;
export class Game {
	public readonly id: number;

	public readonly title: string;

	public readonly seriesId: number;

	public readonly imageId?: number;

	public readonly description: string;

	public readonly analysis: string;

	constructor(props: GameProps) {
		this.id = props.id;
		this.title = props.title;
		this.seriesId = props.seriesId;
		this.imageId = props.imageId;
		this.description = props.description;
		this.analysis = props.analysis;
	}
}
