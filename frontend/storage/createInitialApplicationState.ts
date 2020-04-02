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
import { AbilityVariant } from './models/AbilityVariant';

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
		abilityVariants: createMockAbilityVariants(),
	};
}
function createMockGamesVisibility(): Map<number, boolean> {
	const mockData: Map<number, boolean> = new Map();
	for (let i = 0; i < 20; i++) {
		mockData.set(i, true);
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
			description:
				'Incididunt sint ea dolore cupidatat dolore quis tempor cupidatat ex enim velit proident sunt pariatur. Ullamco pariatur consequat sint eiusmod sit consequat nulla sit pariatur fugiat ea id anim. Irure reprehenderit consectetur incididunt ullamco esse id anim culpa mollit anim aliqua consectetur tempor occaecat. In veniam anim tempor in cillum nostrud sint est aliqua incididunt id Lorem.',
			analysis:
				'Aliqua deserunt cillum consectetur incididunt incididunt sunt elit labore nulla occaecat pariatur do quis amet. Elit cillum tempor duis aliqua dolor labore duis anim aliquip aliqua. Dolor consectetur aute irure sint irure sunt eiusmod et. Ut mollit sit laborum reprehenderit officia eu. Laborum consectetur non fugiat Lorem sunt officia incididunt pariatur labore id commodo adipisicing consectetur nostrud. Velit laborum sunt exercitation quis ex laborum pariatur do mollit ad. Officia laborum enim ipsum officia Lorem.',
		})
	);
	mockData.set(
		1,
		new Ability({
			id: 1,
			groupId: 1,
			name: 'Increased Jump Height',
			description:
				'Incididunt sint ea dolore cupidatat dolore quis tempor cupidatat ex enim velit proident sunt pariatur. Dolore minim in ipsum tempor consectetur. Est et ut dolore aliquip culpa sunt non incididunt non sunt. Do occaecat aliquip est consequat ex. Qui ex minim adipisicing sunt cupidatat voluptate. Nisi ea sit pariatur occaecat. Dolor minim laboris tempor nulla occaecat reprehenderit do aliqua culpa officia.',
			analysis:
				'Qui minim in est ipsum dolor culpa quis magna magna amet eu. Ullamco est cupidatat velit qui eiusmod id voluptate veniam nulla adipisicing. Duis non ut culpa incididunt esse culpa fugiat. Nostrud fugiat ad consectetur id amet et id ullamco. Aute anim cupidatat ipsum ullamco sunt aliquip reprehenderit labore Lorem adipisicing pariatur ea sint. Eu eiusmod excepteur duis ad voluptate laboris velit nulla mollit quis dolore ex reprehenderit. Eu sunt excepteur non pariatur ex ullamco deserunt sit laboris nisi cillum.',
		})
	);
	mockData.set(
		2,
		new Ability({
			id: 2,
			groupId: 2,
			name: 'Beam-weapon',
			description:
				'Incididunt sint ea dolore cupidatat dolore quis tempor cupidatat ex enim velit proident sunt pariatur. Cupidatat nisi enim laboris irure eu. Laborum nulla proident eiusmod officia aliqua mollit qui. Commodo esse voluptate enim voluptate consectetur cillum et Lorem. Ex aliquip velit sit reprehenderit non nulla aliqua tempor amet consequat irure.',
			analysis:
				'Exercitation occaecat eiusmod magna sit enim enim aute ea adipisicing ut. Non adipisicing Lorem irure do anim. Eu qui excepteur sunt excepteur in et et laborum enim in ipsum dolore Lorem. Reprehenderit fugiat exercitation ullamco non aliqua eu. Esse pariatur fugiat sit in consectetur ad velit cillum minim. Dolor quis laborum commodo labore magna ex. Irure dolore do aliqua nisi cillum.',
		})
	);
	mockData.set(
		3,
		new Ability({
			id: 3,
			groupId: 3,
			name: 'Game-Map',
			description:
				'Incididunt sint ea dolore cupidatat dolore quis tempor cupidatat ex enim velit proident sunt pariatur. Irure do laborum aliqua veniam. Esse nulla commodo labore deserunt non laboris occaecat consectetur. Occaecat et qui nisi occaecat reprehenderit cupidatat dolore esse labore irure. Enim dolor sint excepteur ut qui est laboris reprehenderit laboris occaecat pariatur irure. Mollit reprehenderit cupidatat reprehenderit Lorem id nisi consequat excepteur irure magna velit enim proident adipisicing.',
			analysis:
				'Adipisicing id fugiat dolor nostrud commodo officia sit exercitation nostrud magna labore velit qui incididunt. Cillum irure adipisicing magna officia ex dolor sit aliquip non minim veniam commodo cillum ea. Ullamco ea laboris consequat tempor dolore amet mollit tempor commodo esse consequat ad proident. Sit veniam proident pariatur tempor. Sint Lorem et voluptate mollit esse. Et laboris est esse fugiat velit eiusmod cupidatat.',
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
					imageId: 22,
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
					imageId: 22,
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
					imageId: 22,
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
					imageId: 22,
				})
			);
	}
	return mockData;
}
function createMockAbilityVariants(): Array<AbilityVariant> {
	const mockData: Array<AbilityVariant> = new Array();
	for (let i = 0; i < 20; i++) {
		for (let j = 0; j < Math.random() * 20 + 1; j++)
			mockData.push(
				new AbilityVariant({
					id: i * 20 + j,
					abilityId: i,
					description: 'Cupidatat dolore deserunt excepteur cupidatat laboris laboris culpa aliqua eiusmod sit ex magna culpa.',
				})
			);
	}
	return mockData;
}
