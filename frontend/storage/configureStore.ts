import { createStore, Store, applyMiddleware } from 'redux';
import { AppActions, AppStore } from './common';
import { appReducer } from './reducers';
import { createInitialApplicationState } from './createInitialApplicationState';
import thunk from 'redux-thunk';

export default function configureStore(): Store<AppStore, AppActions> {
	const store = createStore(appReducer, createInitialApplicationState(), applyMiddleware(thunk));
	return store;
}
