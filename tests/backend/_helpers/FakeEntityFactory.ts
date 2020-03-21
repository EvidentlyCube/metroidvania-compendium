import * as Faker from 'faker';
import { Environment } from '../../../backend/database/entities/Environment';
import { BaseEntity } from '../../../backend/database/entities/BaseEntity';
import { Image } from '../../../backend/database/entities/Image';
import { AbilityCategory } from '../../../backend/database/entities/AbilityCategory';
import { AbilityGroup } from '../../../backend/database/entities/AbilityGroup';
import { Ability } from '../../../backend/database/entities/Ability';
import { GameSeries } from '../../../backend/database/entities/GameSeries';
import { Game } from '../../../backend/database/entities/Game';
import { GameLink } from '../../../backend/database/entities/GameLink';
import { AbilityVariant } from '../../../backend/database/entities/AbilityVariant';
import { AbilityExample } from '../../../backend/database/entities/AbilityExample';
import { GameEnvironment } from '../../../backend/database/entities/GameEnvironment';

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

	public static abilityVariant(abilities: Ability[]): AbilityVariant {
		return {
			...FakeEntityFactory.common(),
			abilityId: Faker.random.arrayElement(abilities).id,
			description: Faker.lorem.words(10),
		};
	}

	public static abilityVariants(abilities: Ability[], count: number): AbilityVariant[] {
		return FakeEntityFactory.repeat(count, () => FakeEntityFactory.abilityVariant(abilities));
	}

	public static abilityExample(abilities: Ability[], games: Game[], images: (Image | null)[]): AbilityExample {
		return {
			...FakeEntityFactory.common(),
			abilityId: Faker.random.arrayElement(abilities).id,
			gameId: Faker.random.arrayElement(games).id,
			imageId: Faker.random.arrayElement(images)?.id ?? null,
			description: Faker.lorem.words(10),
			name: Faker.name.firstName(),
		};
	}

	public static abilityExamples(abilities: Ability[], games: Game[], images: (Image | null)[], count: number): AbilityExample[] {
		return FakeEntityFactory.repeat(count, () => FakeEntityFactory.abilityExample(abilities, games, images));
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

	public static gameLink(games: Game[]): GameLink {
		return {
			...FakeEntityFactory.common(),
			gameId: Faker.random.arrayElement(games).id,
			name: Faker.name.firstName(),
			url: Faker.internet.url(),
		};
	}

	public static gameLinks(games: Game[], count: number): GameLink[] {
		return FakeEntityFactory.repeat(count, () => FakeEntityFactory.gameLink(games));
	}

	public static gameEnvironment(games: Game[], environments: Environment[]): GameEnvironment {
		return {
			...FakeEntityFactory.common(),
			gameId: Faker.random.arrayElement(games).id,
			environmentId: Faker.random.arrayElement(environments).id,
		};
	}

	public static gameEnvironments(games: Game[], environments: Environment[], count: number): GameEnvironment[] {
		return FakeEntityFactory.repeat(count, () => FakeEntityFactory.gameEnvironment(games, environments));
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
