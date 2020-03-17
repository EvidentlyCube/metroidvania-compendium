import { Game } from './models/Game';
import SuperMetroidCover from '../assets/cover_super_metroid.jpg';
import { AppStore } from './common';
import { GameSeries } from './models/GameSeries';
import { Image } from './models/Image';
import { GameEnvironment } from './models/GameEnvironment';
import { Environment } from './models/Environment';
import { AbilityGroup } from './models/AbilityGroup';
import { AbilityCategory } from './models/AbilityCategory';
import { Ability } from './models/Ability';
import { AbilityExample } from './models/AbilityExample';

export function createInitialApplicationState(): AppStore {
	return {
		headerBreadcrumb: 'Home',
		gamesVisibility: createMockGamesVisibility(),
		games: createMockGames(),
		gameSeries: createMockGameSeries(),
		images: createMockImages(),
		environments: createMockEnvironemnts(),
		gameEnvironments: createMockGameEnvironments(),
		abilityExamples: createMockAbilityExamples(),
		abilities: createMockAbilities(),
		abilityGroups: createMockAbilityGroups(),
		abilityCategories: createMockAbilityCategories(),
	};
}
function createMockGamesVisibility(): Map<number, boolean> {
	const mockData: Map<number, boolean> = new Map();
	for (let i = 0; i < 20; i++) {
		mockData.set(i, Math.random() >= 0.5);
	}
	return mockData;
}
function createMockGames(): Map<number, Game> {
	const mockData: Map<number, Game> = new Map();
	for (let i = 0; i < 20; i++) {
		mockData.set(
			i,
			new Game({
				id: i,
				title: `Super Metroid: ${i}`,
				seriesId: i,
				imageId: i,
				description:
					'Elit duis Lorem excepteur amet in aliqua incididunt proident aute tempor nisi. Pariatur id in pariatur proident dolore. Anim cillum est dolore id aliqua deserunt. Mollit magna nisi qui enim duis cillum. Amet id cillum esse aliquip eiusmod amet ipsum in. Deserunt anim commodo deserunt sit voluptate fugiat duis do sit proident non quis. Ut pariatur sit dolor excepteur anim culpa labore minim velit est. Laborum nulla sint anim nostrud velit et Lorem enim mollit mollit. Labore in esse id magna laborum consectetur aliqua in.',
				analysis:
					'Laborum sit non duis nisi mollit sint sunt. Adipisicing mollit incididunt elit ea nostrud consequat tempor fugiat aliqua velit. Nulla duis enim cillum aliqua ad amet Lorem. Magna tempor proident ullamco aliquip velit cupidatat. Velit exercitation laborum Lorem tempor anim Lorem adipisicing quis esse.',
			})
		);
	}
	return mockData;
}
function createMockGameSeries(): Map<number, GameSeries> {
	const mockData: Map<number, GameSeries> = new Map();
	for (let i = 0; i < 20; i++) {
		mockData.set(
			i,
			new GameSeries({
				id: i,
				name: `Metroid: ${i}`,
				description:
					'Elit duis Lorem excepteur amet in aliqua incididunt proident aute tempor nisi. Pariatur id in pariatur proident dolore. Anim cillum est dolore id aliqua deserunt.',
				wikiUrl: `https://en.wikipedia.org/wiki/Metroid`,
			})
		);
	}
	return mockData;
}
function createMockImages(): Map<number, Image> {
	const mockData: Map<number, Image> = new Map();
	for (let i = 0; i < 20; i++) {
		mockData.set(
			i,
			new Image({
				id: i,
				name: 'Super Metroid IMG',
				fileUrl: SuperMetroidCover,
			})
		);
	}
	return mockData;
}
function createMockEnvironemnts(): Map<number, Environment> {
	const mockData: Map<number, Environment> = new Map();
	mockData.set(
		0,
		new Environment({
			id: 0,
			name: 'SNES',
			description:
				'Voluptate cupidatat magna magna veniam consectetur esse cillum Lorem consequat aliqua mollit ut. In non tempor dolore dolore. Esse aute quis proident fugiat proident elit elit magna elit ullamco. Labore Lorem Lorem pariatur commodo minim adipisicing qui officia irure quis ad Lorem ad non. Aliqua nulla mollit non consequat aliqua incididunt occaecat ea sunt incididunt mollit. Ut nulla enim voluptate labore sunt consequat ut id et laboris dolor ipsum. Reprehenderit mollit amet et dolore non enim deserunt minim velit duis anim sunt excepteur.',
			wikiUrl: 'https://en.wikipedia.org/wiki/Super_Nintendo_Entertainment_System',
		})
	);
	mockData.set(
		1,
		new Environment({
			id: 1,
			name: 'Nintendo 3DS Ambassador Program',
			description:
				'Voluptate cupidatat magna magna veniam consectetur esse cillum Lorem consequat aliqua mollit ut. In non tempor dolore dolore. Esse aute quis proident fugiat proident elit elit magna elit ullamco. Labore Lorem Lorem pariatur commodo minim adipisicing qui officia irure quis ad Lorem ad non. Aliqua nulla mollit non consequat aliqua incididunt occaecat ea sunt incididunt mollit. Ut nulla enim voluptate labore sunt consequat ut id et laboris dolor ipsum. Reprehenderit mollit amet et dolore non enim deserunt minim velit duis anim sunt excepteur.',
			wikiUrl: 'https://nintendo.fandom.com/wiki/Nintendo_3DS_Ambassador_Program',
		})
	);
	return mockData;
}
function createMockGameEnvironments(): Array<GameEnvironment> {
	const mockData: Array<GameEnvironment> = new Array();
	for (let i = 0; i < 20; i++) {
		//Added randomness to check if filtering works
		if (Math.random() >= 0.5) {
			mockData.push(
				new GameEnvironment({
					gameId: i,
					environmentId: 0,
				})
			);
		}
		mockData.push(
			new GameEnvironment({
				gameId: i,
				environmentId: 1,
			})
		);
	}
	return mockData;
}
function createMockAbilityGroups(): Map<number, AbilityGroup> {
	const mockData: Map<number, AbilityGroup> = new Map();
	mockData.set(0, new AbilityGroup({ id: 0, categoryId: 0, name: 'Jump', description: 'Ullamco sint ullamco eu Lorem nulla Lorem laboris.' }));
	mockData.set(1, new AbilityGroup({ id: 1, categoryId: 1, name: 'Wall-run', description: 'Ullamco sint ullamco eu Lorem nulla Lorem laboris.' }));
	mockData.set(2, new AbilityGroup({ id: 2, categoryId: 2, name: 'Beam-weapons', description: 'Ullamco sint ullamco eu Lorem nulla Lorem laboris.' }));
	mockData.set(3, new AbilityGroup({ id: 3, categoryId: 3, name: 'Map', description: 'Ullamco sint ullamco eu Lorem nulla Lorem laboris.' }));
	return mockData;
}
function createMockAbilityCategories(): Map<number, AbilityCategory> {
	const mockData: Map<number, AbilityCategory> = new Map();
	mockData.set(0, new AbilityCategory({ id: 0, name: 'Default', description: 'Ullamco sint ullamco eu Lorem nulla Lorem laboris.' }));
	mockData.set(1, new AbilityCategory({ id: 1, name: 'Routing', description: 'Ullamco sint ullamco eu Lorem nulla Lorem laboris.' }));
	mockData.set(2, new AbilityCategory({ id: 2, name: 'Combat', description: 'Ullamco sint ullamco eu Lorem nulla Lorem laboris.' }));
	mockData.set(3, new AbilityCategory({ id: 3, name: 'Accessibility', description: 'Ullamco sint ullamco eu Lorem nulla Lorem laboris.' }));
	return mockData;
}
function createMockAbilities(): Map<number, Ability> {
	const mockData: Map<number, Ability> = new Map();
	mockData.set(
		0,
		new Ability({
			id: 0,
			groupId: 0,
			name: 'Jump',
			description: 'Incididunt sint ea dolore cupidatat dolore quis tempor cupidatat ex enim velit proident sunt pariatur.',
		})
	);
	mockData.set(
		1,
		new Ability({
			id: 1,
			groupId: 1,
			name: 'Increased Jump Height',
			description: 'Incididunt sint ea dolore cupidatat dolore quis tempor cupidatat ex enim velit proident sunt pariatur.',
		})
	);
	mockData.set(
		2,
		new Ability({
			id: 2,
			groupId: 2,
			name: 'Beam-weapon',
			description: 'Incididunt sint ea dolore cupidatat dolore quis tempor cupidatat ex enim velit proident sunt pariatur.',
		})
	);
	mockData.set(
		3,
		new Ability({
			id: 3,
			groupId: 3,
			name: 'Game-Map',
			description: 'Incididunt sint ea dolore cupidatat dolore quis tempor cupidatat ex enim velit proident sunt pariatur.',
		})
	);
	return mockData;
}
function createMockAbilityExamples(): Array<AbilityExample> {
	const mockData: Array<AbilityExample> = new Array();
	for (let i = 0; i < 20; i++) {
		for (let j = 0; j < Math.random() * 10 + 1; j++)
			mockData.push(
				new AbilityExample({
					id: 40 * i + j,
					gameId: i,
					abilityId: 0,
					name: 'Jumping boots',
					description: 'Do exercitation in incididunt magna.',
				})
			);
		for (let j = 0; j < Math.random() * 10 + 1; j++)
			mockData.push(
				new AbilityExample({
					id: 40 * i + j + 10,
					gameId: i,
					abilityId: 1,
					name: 'High Jumping boots',
					description: 'Fugiat laborum et laborum ex laborum magna adipisicing.',
				})
			);
		for (let j = 0; j < Math.random() * 10 + 1; j++)
			mockData.push(
				new AbilityExample({
					id: 40 * i + j + 20,
					gameId: i,
					abilityId: 2,
					name: 'Laser-gun',
					description: 'Cillum aliquip quis ipsum nisi incididunt non cillum veniam deserunt.',
				})
			);
		for (let j = 0; j < Math.random() * 10 + 1; j++)
			mockData.push(
				new AbilityExample({
					id: 40 * i + j + 30,
					gameId: i,
					abilityId: 3,
					name: 'Map of the colony',
					description: 'Duis Lorem irure minim sunt est commodo laborum voluptate minim nisi.',
				})
			);
	}
	console.log(mockData);
	return mockData;
}
