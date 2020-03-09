// eslint-disable-next-line no-unused-vars
import {createStore, Store} from 'redux';
// eslint-disable-next-line no-unused-vars
import { AppActions, AppStore } from './common';
import {appReducer } from './reducers';
import { GameSpoilers } from './models/GameSpoilers';

export default function configureStore(): Store<AppStore, AppActions> {
	const store = createStore(appReducer, createInitialApplicationState());
	return store;
}
function createInitialApplicationState(): AppStore {
	return {
		headerBreadcrumb: 'Home',
		gameSpoilers: createMockGameSpoilers(),
	};
}
function createMockGameSpoilers(): Map<number, GameSpoilers> {
	let mockData: Map<number, GameSpoilers>  = new Map();
	for (let i = 0; i < 20; i++) {
		const randomBoolean = Math.random() >= 0.5;
		const mockGame = new GameSpoilers({gameId: i, name: 'Super Metroid', showSpoilers: randomBoolean});
		mockData.set(i, mockGame);
	}
	return mockData;
}
