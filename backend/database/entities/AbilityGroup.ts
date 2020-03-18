import { Column, Entity } from 'typeorm';
import { BaseEntity } from './BaseEntity';

@Entity('ability_groups')
export class AbilityGroup extends BaseEntity {
	@Column({ name: 'category_id', type: 'int', unsigned: true })
	public categoryId: number;

	@Column({ type: 'varchar', length: 255 })
	public name: string;

	@Column({ type: 'text' })
	public description: string;
}
