import { Column, Entity } from 'typeorm';
import { BaseEntity } from './BaseEntity';

@Entity('game_environments')
export class GameEnvironment extends BaseEntity {
	@Column({ name: 'game_id', type: 'int', unsigned: true })
	public gameId: number;

	@Column({ name: 'environment_id', type: 'int', unsigned: true })
	public environmentId: number;
}
