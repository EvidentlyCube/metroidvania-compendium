export interface GameProps{
	gameId: number;
	gameName: string;
}
export class Game {
	public readonly gameId: number;

	public readonly gameName: string;

	constructor(props: GameProps) {
		this.gameId = props.gameId;
		this.gameName = props.gameName;
	}
}
