import { Column, Entity } from 'typeorm';
import { BaseEntity } from './BaseEntity';

@Entity('ability_examples')
export class AbilityExample extends BaseEntity {
	@Column({ name: 'ability_id', type: 'int', unsigned: true })
	public abilityId: number;

	@Column({ name: 'game_id', type: 'int', unsigned: true })
	public gameId: number;

	@Column({ name: 'image_id', type: 'int', unsigned: true, nullable: true })
	public imageId: number | null;

	@Column({ type: 'varchar', length: 255 })
	public name: string;

	@Column({ type: 'text' })
	public description: string;
}
