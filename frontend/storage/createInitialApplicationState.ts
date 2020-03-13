import { Game } from './models/Game';
import SuperMetroidCover from '../assets/cover_super_metroid.jpg';
import { AppStore } from './common';
import { GameSeries } from './models/GameSeries';
import { File, Types } from './models/File';

export function createInitialApplicationState(): AppStore {
	return {
		headerBreadcrumb: 'Home',
		gamesVisibility: createMockGamesVisibility(),
		games: createMockGames(),
		gameSeries: createMockGameSeries(),
		images: createMockImages(),
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
					'Elit duis Lorem excepteur amet in aliqua incididunt proident aute tempor nisi. Pariatur id in pariatur proident dolore. Anim cillum est dolore id aliqua deserunt.',
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
function createMockImages(): Map<number, File> {
	const mockData: Map<number, File> = new Map();
	for (let i = 0; i < 20; i++) {
		mockData.set(
			i,
			new File({
				id: i,
				name: 'Super Metroid IMG',
				fileUrl: SuperMetroidCover,
				type: Types.image,
			})
		);
	}
	return mockData;
}
