import { createStore, Store } from 'redux';
import { AppActions, AppStore } from './common';
import { appReducer } from './reducers';
import { createInitialApplicationState } from './createInitialApplicationState';

export default function configureStore(): Store<AppStore, AppActions> {
	const store = createStore(appReducer, createInitialApplicationState());
	return store;
}
