// eslint-disable-next-line no-unused-vars
import {createStore, Store} from 'redux';
// eslint-disable-next-line no-unused-vars
import { AppActions, AppStore } from './common';
import {appReducer } from './reducers';
import { Game } from './models/Game';

export default function configureStore(): Store<AppStore, AppActions> {
	const store = createStore(appReducer, createInitialApplicationState());
	return store;
}
function createInitialApplicationState(): AppStore {
	return {
		headerBreadcrumb: 'Home',
		gamesVisibility: createMockGamesVisibility(),
		games: createMockGames(),
	};
}
function createMockGamesVisibility(): Map<number, boolean> {
	let mockData: Map<number, boolean>  = new Map();
	for (let i = 0; i < 20; i++) {
		const randomBoolean = Math.random() >= 0.5;
		mockData.set(i, randomBoolean);
	}
	return mockData;
}
function createMockGames(): Map<number, Game> {
	let mockData: Map<number, Game>  = new Map();
	for (let i = 0; i < 20; i++) {
		const mockGame = new Game({id: i, name: `Super Metroid: ${i}`});
		mockData.set(i, mockGame);
	}
	return mockData;
}
