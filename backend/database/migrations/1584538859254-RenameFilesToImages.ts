import { MigrationInterface, QueryRunner } from 'typeorm';

export class RenameFilesToImages1584538859254 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<any> {
		await queryRunner.renameTable('files', 'images');
	}

	public async down(): Promise<any> {
		throw new Error('Unsupported');
	}
}
