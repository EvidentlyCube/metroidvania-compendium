import { Column, Entity } from 'typeorm';
import { BaseEntity } from './BaseEntity';

@Entity('ability_categories')
export class AbilityCategory extends BaseEntity {
	@Column({ type: 'varchar', length: 255 })
	public name: string;

	@Column({ type: 'text' })
	public description: string;
}
