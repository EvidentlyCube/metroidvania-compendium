import { Column, Entity } from 'typeorm';
import { BaseEntity } from './BaseEntity';

@Entity('environments')
export class Environment extends BaseEntity {
	@Column({ type: 'varchar', length: 255 })
	public name: string;

	@Column({ type: 'text' })
	public description: string;

	@Column({ name: 'wiki_url', type: 'text' })
	public wikiUrl: string;
}
