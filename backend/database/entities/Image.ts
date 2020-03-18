import { Column, Entity } from 'typeorm';
import { BaseEntity } from './BaseEntity';

@Entity('images')
export class Image extends BaseEntity {
	@Column({ type: 'varchar', length: 255 })
	public name: string;
}
