import { Column, Entity } from 'typeorm';
import { BaseEntity } from './BaseEntity';

@Entity('abilities')
export class Ability extends BaseEntity {
	@Column({ name: 'group_id', type: 'int', unsigned: true })
	public groupId: number;

	@Column({ type: 'varchar', length: 255 })
	public name: string;

	@Column({ type: 'text' })
	public description: string;
}
