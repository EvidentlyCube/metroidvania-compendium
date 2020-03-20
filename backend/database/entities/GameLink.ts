import { Column, Entity } from 'typeorm';
import { BaseEntity } from './BaseEntity';

@Entity('game_links')
export class GameLink extends BaseEntity {
	@Column({ name: 'game_id', type: 'int', unsigned: true })
	public gameId: number;

	@Column({ name: 'name', type: 'varchar', length: 255 })
	public name: string;

	@Column({ name: 'url', type: 'text' })
	public url: string;
}
