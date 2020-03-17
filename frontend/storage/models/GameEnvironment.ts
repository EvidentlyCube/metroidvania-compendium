export type GameEnvironmentProps = Required<GameEnvironment>;
export class GameEnvironment {
	public readonly gameId: number;

	public readonly environmentId: number;

	constructor(props: GameEnvironmentProps) {
		this.gameId = props.gameId;
		this.environmentId = props.environmentId;
	}
}
