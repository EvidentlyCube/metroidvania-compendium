// eslint-disable-next-line no-unused-vars
import {createStore, Store} from 'redux';
// eslint-disable-next-line no-unused-vars
import { Breadcrumb, SetBreadcrumbAction } from './common';
import { breadcrumbReducer } from './reducers/breadcrumb';

export default function configureStore(): Store<Breadcrumb, SetBreadcrumbAction> {
	const store = createStore(breadcrumbReducer);
	return store;
}
