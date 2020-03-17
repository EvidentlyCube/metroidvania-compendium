import { Game } from './models/Game';
import SuperMetroidCover from '../assets/cover_super_metroid.jpg';
import { AppStore } from './common';
import { GameSeries } from './models/GameSeries';
import { Image } from './models/Image';
import { GameEnvironment } from './models/GameEnvironment';
import { Environment } from './models/Environment';

export function createInitialApplicationState(): AppStore {
	return {
		headerBreadcrumb: 'Home',
		gamesVisibility: createMockGamesVisibility(),
		games: createMockGames(),
		gameSeries: createMockGameSeries(),
		images: createMockImages(),
		environments: createMockEnvironemnts(),
		gameEnvironments: createMockGameEnvironments(),
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
