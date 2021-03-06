import { Database, EntityConditions } from '../../../backend/database/Database';
import { ObjectType } from 'typeorm/common/ObjectType';
import { assert } from 'chai';

interface Mock {
	args: any[];
	response: any;
}

interface WithId {
	id: any;
}

type MethodToMocksMap = Map<string, Mock[]>;

export class MockDatabase implements Database {
	private readonly $mocks: MethodToMocksMap = new Map();
	private readonly $errors: Error[] = [];

	private $mustTeardown: boolean;

	public $assertWasTeardownCalled() {
		assert.isFalse(this.$mustTeardown);
	}

	public $teardown(): void {
		this.$mustTeardown = false;

		try {
			Array.from(this.$mocks.keys()).forEach(mockName => {
				const mocks = this.$mocks.get(mockName);
				if (mocks && mocks.length > 0) {
					throw new Error(`Not all mocks for ${mockName} were used`);
				}
			});

			if (this.$errors.length > 0) {
				throw new Error(`Unexpected errors were thrown by the database: ${this.$errors.map(error => error.toString()).join('\n')}`);
			}
		} finally {
			this.$errors.length = 0;
			this.$mocks.clear();
		}
	}

	public $mockFindAll<Entity>(entity: ObjectType<Entity>, response: Entity[]): void {
		this.appendMock('findAll', {
			args: [entity],
			response,
		});
	}

	public async findAll<Entity>(entity: ObjectType<Entity>): Promise<Entity[]> {
		return this.logExceptions(() => this.executeMock('findAll', [entity]));
	}

	public $mockFindOneById<Entity extends WithId>(entity: ObjectType<Entity>, id: string | number, response: Entity | undefined): void {
		this.appendMock('findOneById', {
			args: [entity, id.toString()],
			response,
		});
	}

	public async findOneById<Entity>(entity: ObjectType<Entity>, id: string): Promise<Entity | undefined> {
		return this.logExceptions(() => this.executeMock('findOneById', [entity, id]));
	}

	public $mockFindManyBy<Entity extends WithId>(entity: ObjectType<Entity>, conditions: EntityConditions<Entity>, response: Entity[]): void {
		this.appendMock('findManyBy', {
			args: [entity, conditions],
			response,
		});
	}

	public async findManyBy<Entity>(entity: ObjectType<Entity>, conditions: EntityConditions<Entity>): Promise<Entity[]> {
		return this.logExceptions(() => this.executeMock('findManyBy', [entity, conditions]));
	}

	private async executeMock(name: string, args: any[]): Promise<any> {
		const mocks = this.$mocks.get(name) as Mock[];
		assert.typeOf(mocks, 'array', `No mock was defined for '${name}'`);

		const mock = mocks.shift() as Mock;
		assert.isNotNull(mock, `All mocks were used up for '${name}'`);
		assert.lengthOf(mock.args, args.length, `Argument length does not match for '${name}'`);
		for (let i = 0; i < args.length; i++) {
			assert.deepEqual(args[i], mock.args[i], `Arguments mismatch for index '${i}' for '${name}'`);
		}

		return mock.response;
	}

	private appendMock(name: string, mock: Mock): void {
		this.$mustTeardown = true;

		const mocks = this.$mocks.get(name) || [];
		mocks.push(mock);

		this.$mocks.set(name, mocks);
	}

	private async logExceptions<T>(callback: () => T): Promise<T> {
		try {
			return await callback();
		} catch (error) {
			this.$errors.push(error);
			throw error;
		}
	}
}
