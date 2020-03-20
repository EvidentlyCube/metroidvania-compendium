import { Column, Entity } from 'typeorm';
import { BaseEntity } from './BaseEntity';

@Entity('games')
export class Game extends BaseEntity {
	@Column({ name: 'series_id', type: 'int', unsigned: true })
	public seriesId: number;

	@Column({ name: 'image_id', type: 'int', unsigned: true, nullable: true })
	public imageId: number | null;

	@Column({ type: 'varchar', length: 255 })
	public title: string;

	@Column({ type: 'text' })
	public description: string;

	@Column({ type: 'text' })
	public analysis: string;
}
