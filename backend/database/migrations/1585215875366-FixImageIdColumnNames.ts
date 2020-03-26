import { MigrationInterface, QueryRunner } from 'typeorm';

export class FixImageIdColumnNames1585215875366 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<any> {
		await queryRunner.renameColumn('games', 'imageId', 'image_id');
		await queryRunner.renameColumn('ability_examples', 'imageId', 'image_id');
	}

	public async down(): Promise<any> {
		throw new Error('Unsupported');
	}
}
