import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export class BaseEntity {
	@PrimaryGeneratedColumn('increment', { type: 'int', unsigned: true })
	public id: number;

	@CreateDateColumn({ name: 'created_at' })
	public createdAt: null;

	@UpdateDateColumn({ name: 'updated_at' })
	public updatedAt: null;
}
