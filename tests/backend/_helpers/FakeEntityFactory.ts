import * as Faker from 'faker';
import { Environment } from '../../../backend/database/entities/Environment';
import { BaseEntity } from '../../../backend/database/entities/BaseEntity';
import { Image } from '../../../backend/database/entities/Image';
import { AbilityCategory } from '../../../backend/database/entities/AbilityCategory';
import { AbilityGroup } from '../../../backend/database/entities/AbilityGroup';
import { Ability } from '../../../backend/database/entities/Ability';
import { GameSeries } from '../../../backend/database/entities/GameSeries';

export class FakeEntityFactory {
	private static idCounter: number = 1;

	public static abilityCategory(): AbilityCategory {
		return {
			...FakeEntityFactory.common(),
			name: Faker.name.firstName(),
			description: Faker.lorem.words(10),
		};
	}

	public static abilityCategories(count: number): AbilityCategory[] {
		return FakeEntityFactory.repeat(count, () => FakeEntityFactory.abilityCategory());
	}

	public static abilityGroup(categoryIds: number[]): AbilityGroup {
		return {
			...FakeEntityFactory.common(),
			categoryId: Faker.random.arrayElement(categoryIds),
			name: Faker.name.firstName(),
			description: Faker.lorem.words(10),
		};
	}

	public static abilityGroups(categoryIds: number[], count: number): AbilityGroup[] {
		return FakeEntityFactory.repeat(count, () => FakeEntityFactory.abilityGroup(categoryIds));
	}

	public static ability(groupIds: number[]): Ability {
		return {
			...FakeEntityFactory.common(),
			groupId: Faker.random.arrayElement(groupIds),
			name: Faker.name.firstName(),
			description: Faker.lorem.words(10),
		};
	}

	public static abilities(groupIds: number[], count: number): Ability[] {
		return FakeEntityFactory.repeat(count, () => FakeEntityFactory.ability(groupIds));
	}

	public static gameSerie(): GameSeries {
		return {
			...FakeEntityFactory.common(),
			name: Faker.name.firstName(),
			description: Faker.lorem.words(10),
			wikiUrl: Faker.internet.url(),
		};
	}

	public static gameSeries(count: number): GameSeries[] {
		return FakeEntityFactory.repeat(count, () => FakeEntityFactory.gameSerie());
	}

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

	public static image(): Image {
		return {
			...FakeEntityFactory.common(),
			name: Faker.name.firstName(),
			fileUrl: Faker.internet.domainWord() + '.png',
		};
	}

	public static images(count: number): Image[] {
		return FakeEntityFactory.repeat(count, FakeEntityFactory.image);
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
