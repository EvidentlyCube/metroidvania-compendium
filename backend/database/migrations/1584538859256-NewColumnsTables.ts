import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey, TableIndex } from 'typeorm';

export class NewColumnsTables1584538859256 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<any> {
		await queryRunner.addColumn(
			'games',
			new TableColumn({
				name: 'imageId',
				type: 'int',
				unsigned: true,
				isNullable: true,
			})
		);
		await queryRunner.createIndex(
			'games',
			new TableIndex({
				columnNames: ['imageId'],
			})
		);
		await queryRunner.createForeignKey(
			'games',
			new TableForeignKey({
				columnNames: ['imageId'],
				referencedTableName: 'images',
				referencedColumnNames: ['id'],
			})
		);

		await queryRunner.addColumn(
			'ability_examples',
			new TableColumn({
				name: 'imageId',
				type: 'int',
				unsigned: true,
				isNullable: true,
			})
		);
		await queryRunner.createIndex(
			'ability_examples',
			new TableIndex({
				columnNames: ['imageId'],
			})
		);
		await queryRunner.createForeignKey(
			'ability_examples',
			new TableForeignKey({
				columnNames: ['imageId'],
				referencedTableName: 'images',
				referencedColumnNames: ['id'],
			})
		);

		await queryRunner.addColumn(
			'abilities',
			new TableColumn({
				name: 'analysis',
				type: 'text',
				isNullable: false,
			})
		);
	}

	public async down(): Promise<any> {
		throw new Error('Unsupported');
	}
}
