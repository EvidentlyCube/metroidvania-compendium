import { Column, Entity } from 'typeorm';
import { BaseEntity } from './BaseEntity';

@Entity('ability_variants')
export class AbilityVariant extends BaseEntity {
	@Column({ name: 'ability_id', type: 'int', unsigned: true })
	public abilityId: number;

	@Column({ type: 'text' })
	public description: string;
}
