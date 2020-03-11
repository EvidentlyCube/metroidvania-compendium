import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { TableColumnOptions } from 'typeorm/schema-builder/options/TableColumnOptions';
import { TableForeignKeyOptions } from 'typeorm/schema-builder/options/TableForeignKeyOptions';

export class Initial1583745968571 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<any> {
		await this.createEnvironmentsTable(queryRunner);
		await this.createGameSeriesTable(queryRunner);
		await this.createFilesTable(queryRunner);
		await this.createGamesTable(queryRunner);
		await this.createAbilityCategories(queryRunner);
		await this.createAbilityGroups(queryRunner);
		await this.createAbilities(queryRunner);
		await this.createAbilityVariant(queryRunner);
		await this.createAbilityExample(queryRunner);
	}

	private createEnvironmentsTable(queryRunner: QueryRunner) {
		return queryRunner.createTable(
			new Table({
				name: 'environments',
				columns: [
					this.getIdColumn('id', true),
					this.getVarcharColumn('name'),
					this.getTextColumn('description'),
					this.getTextColumn('wiki_url'),
					...this.getCommonColumns(),
				],
			})
		);
	}

	private createGameSeriesTable(queryRunner: QueryRunner) {
		return queryRunner.createTable(
			new Table({
				name: 'game_series',
				columns: [
					this.getIdColumn('id', true),
					this.getVarcharColumn('name'),
					this.getTextColumn('description'),
					this.getTextColumn('wiki_url'),
					...this.getCommonColumns(),
				],
			})
		);
	}

	private createFilesTable(queryRunner: QueryRunner) {
		return queryRunner.createTable(
			new Table({
				name: 'files',
				columns: [
					this.getIdColumn('id', true),
					this.getVarcharColumn('name'),
					this.getEnumColumn('type', ['image', 'downloadable']),
					...this.getCommonColumns(),
				],
			})
		);
	}

	private createGamesTable(queryRunner: QueryRunner) {
		return queryRunner.createTable(
			new Table({
				name: 'games',
				columns: [
					this.getIdColumn('id', true),
					this.getIdColumn('series_id', false),
					this.getVarcharColumn('title'),
					this.getTextColumn('description'),
					this.getTextColumn('analysis'),
					...this.getCommonColumns(),
				],
				foreignKeys: [this.getForeignKey('games', 'series_id', 'game_series', 'id')],
			})
		);
	}

	private createAbilityCategories(queryRunner: QueryRunner) {
		return queryRunner.createTable(
			new Table({
				name: 'ability_categories',
				columns: [this.getIdColumn('id', true), this.getVarcharColumn('name'), this.getTextColumn('description'), ...this.getCommonColumns()],
			})
		);
	}

	private createAbilityGroups(queryRunner: QueryRunner) {
		return queryRunner.createTable(
			new Table({
				name: 'ability_groups',
				columns: [
					this.getIdColumn('id', true),
					this.getIdColumn('category_id', false),
					this.getVarcharColumn('name'),
					this.getTextColumn('description'),
					...this.getCommonColumns(),
				],
				foreignKeys: [this.getForeignKey('ability_groups', 'category_id', 'ability_categories', 'id')],
			})
		);
	}

	private createAbilities(queryRunner: QueryRunner) {
		return queryRunner.createTable(
			new Table({
				name: 'abilities',
				columns: [
					this.getIdColumn('id', true),
					this.getIdColumn('group_id', false),
					this.getVarcharColumn('name'),
					this.getTextColumn('description'),
					...this.getCommonColumns(),
				],
				foreignKeys: [this.getForeignKey('abilities', 'group_id', 'ability_groups', 'id')],
			})
		);
	}

	private createAbilityVariant(queryRunner: QueryRunner) {
		return queryRunner.createTable(
			new Table({
				name: 'ability_variants',
				columns: [this.getIdColumn('id', true), this.getIdColumn('ability_id', false), this.getTextColumn('description'), ...this.getCommonColumns()],
				foreignKeys: [this.getForeignKey('ability_variants', 'ability_id', 'abilities', 'id')],
			})
		);
	}

	private createAbilityExample(queryRunner: QueryRunner) {
		return queryRunner.createTable(
			new Table({
				name: 'ability_examples',
				columns: [
					this.getIdColumn('id', true),
					this.getIdColumn('ability_id', false),
					this.getIdColumn('game_id', false),
					this.getVarcharColumn('name'),
					this.getTextColumn('description'),
					...this.getCommonColumns(),
				],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<any> {
		await queryRunner.dropTable('ability_examples', false, true, true);
		await queryRunner.dropTable('ability_variants', false, true, true);
		await queryRunner.dropTable('abilities', false, true, true);
		await queryRunner.dropTable('ability_groups', false, true, true);
		await queryRunner.dropTable('ability_categories', false, true, true);
		await queryRunner.dropTable('games', false, true, true);
		await queryRunner.dropTable('files', false, true, true);
		await queryRunner.dropTable('game_series', false, true, true);
		await queryRunner.dropTable('environments', false, true, true);
	}

	private getIdColumn(name: string, isPrimary: boolean): TableColumnOptions {
		return {
			name: name,
			type: 'int',
			unsigned: true,
			isNullable: false,
			isPrimary: isPrimary,
			isGenerated: isPrimary,
			generationStrategy: isPrimary ? 'increment' : undefined,
		};
	}

	private getVarcharColumn(name: string, length: string = '255'): TableColumnOptions {
		return {
			name: name,
			type: 'varchar',
			length: length,
			isNullable: false,
		};
	}

	private getTextColumn(name: string): TableColumnOptions {
		return {
			name: name,
			type: 'text',
			isNullable: false,
		};
	}

	private getEnumColumn(name: string, values: string[]): TableColumnOptions {
		return {
			name: name,
			type: 'enum',
			isNullable: false,
			enum: values,
		};
	}

	private getCommonColumns(): TableColumnOptions[] {
		return [
			{
				name: 'created_at',
				type: 'DateTime',
				isNullable: false,
				default: 'CURRENT_TIMESTAMP',
			},
			{
				name: 'updated_at',
				type: 'DateTime',
				isNullable: false,
				default: 'CURRENT_TIMESTAMP',
				onUpdate: 'CURRENT_TIMESTAMP',
			},
		];
	}

	private getForeignKey(tableName: string, columnName: string, referencedTable: string, referencedColumn: string): TableForeignKeyOptions {
		const fkName = [tableName, columnName, 'fk', referencedTable, referencedColumn].map(x => x.replace(/_/g, '')).join('_');

		return {
			name: fkName,
			columnNames: [columnName],
			referencedTableName: referencedTable,
			referencedColumnNames: [referencedColumn],
		};
	}
}
