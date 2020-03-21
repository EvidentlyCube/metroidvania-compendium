import * as Faker from 'faker';
import { Environment } from '../../../backend/database/entities/Environment';
import { BaseEntity } from '../../../backend/database/entities/BaseEntity';
import { Image } from '../../../backend/database/entities/Image';
import { AbilityCategory } from '../../../backend/database/entities/AbilityCategory';
import { AbilityGroup } from '../../../backend/database/entities/AbilityGroup';
import { Ability } from '../../../backend/database/entities/Ability';
import { GameSeries } from '../../../backend/database/entities/GameSeries';
import { Game } from '../../../backend/database/entities/Game';

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

	public static abilityGroup(categories: AbilityCategory[]): AbilityGroup {
		return {
			...FakeEntityFactory.common(),
			categoryId: Faker.random.arrayElement(categories).id,
			name: Faker.name.firstName(),
			description: Faker.lorem.words(10),
		};
	}

	public static abilityGroups(categories: AbilityCategory[], count: number): AbilityGroup[] {
		return FakeEntityFactory.repeat(count, () => FakeEntityFactory.abilityGroup(categories));
	}

	public static ability(groups: AbilityGroup[]): Ability {
		return {
			...FakeEntityFactory.common(),
			groupId: Faker.random.arrayElement(groups).id,
			name: Faker.name.firstName(),
			description: Faker.lorem.words(10),
		};
	}

	public static abilities(groups: AbilityGroup[], count: number): Ability[] {
		return FakeEntityFactory.repeat(count, () => FakeEntityFactory.ability(groups));
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

	public static game(series: GameSeries[], images: (Image | null)[]): Game {
		return {
			...FakeEntityFactory.common(),
			seriesId: Faker.random.arrayElement(series).id,
			imageId: Faker.random.arrayElement(images)?.id ?? null,
			title: Faker.name.firstName(),
			description: Faker.lorem.words(10),
			analysis: Faker.lorem.words(10),
		};
	}

	public static games(series: GameSeries[], images: (Image | null)[], count: number): Game[] {
		return FakeEntityFactory.repeat(count, () => FakeEntityFactory.game(series, images));
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
