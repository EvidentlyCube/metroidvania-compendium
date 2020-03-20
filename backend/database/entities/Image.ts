import { Column, Entity } from 'typeorm';
import { BaseEntity } from './BaseEntity';

const Config = require('../../../config/config.js');

@Entity('images')
export class Image extends BaseEntity {
	@Column({ type: 'varchar', length: 255 })
	public name: string;

	public get fileUrl(): string {
		return `${Config.apiUrl}/assets/images/${this.id}/${this.name}`;
	}
}
