import * as Faker from 'faker';
import { Environment } from '../../../backend/database/entities/Environment';
import { BaseEntity } from '../../../backend/database/entities/BaseEntity';

export class FakeEntityFactory {
	private static idCounter: number = 1;

	public static environment(): Environment {
		return {
			...FakeEntityFactory.common(),
			name: Faker.name.firstName(),
			description: Faker.lorem.words(10),
			wikiUrl: Faker.internet.url(),
		};
	}

	public static environments(count: number): Environment[] {
		return FakeEntityFactory.repeat(count, FakeEntityFactory.environment);
	}

	private static common(): BaseEntity {
		return {
			id: FakeEntityFactory.idCounter++,
			createdAt: Faker.date.past(),
			updatedAt: Faker.date.past(),
		};
	}

	private static repeat<T>(count: number, callback: { (): T }): T[] {
		return Array(count)
			.fill('')
			.map(callback);
	}
}
