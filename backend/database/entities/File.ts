import { Column, Entity } from 'typeorm';
import { BaseEntity } from './BaseEntity';

@Entity('files')
export class File extends BaseEntity {
	@Column({ type: 'varchar', length: 255 })
	public name: string;

	@Column({ type: 'enum', enum: ['image', 'downloadable'] })
	public type: 'image' | 'downloadable';
}
