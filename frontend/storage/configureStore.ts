// eslint-disable-next-line no-unused-vars
import {createStore, Store} from 'redux';
// eslint-disable-next-line no-unused-vars
import { AppStore, AppActions } from './common';
import { breadcrumbReducer } from './reducers/breadcrumb';

export default function configureStore(): Store<AppStore, AppActions> {
	const store = createStore(breadcrumbReducer);
	return store;
}
