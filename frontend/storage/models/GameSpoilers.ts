export interface GameSpoilersProps{
	gameId: number;
	name: string;
	showSpoilers: boolean;
}
export class GameSpoilers {
	public readonly gameId: number;

	public readonly name: string;

	public readonly showSpoilers: boolean;

	constructor(props: GameSpoilersProps) {
		this.gameId = props.gameId;
		this.name = props.name;
		this.showSpoilers = props.showSpoilers;
	}
}

