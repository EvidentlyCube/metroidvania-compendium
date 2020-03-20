import { MigrationInterface, QueryRunner } from 'typeorm';

export class DropTypeInImages1584538859255 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<any> {
		await queryRunner.dropColumn('images', 'type');
	}

	public async down(): Promise<any> {
		throw new Error('Unsupported');
	}
}
